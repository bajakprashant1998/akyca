import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Mail, MailOpen, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

const ContactManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState<any>(null);

  const { data: submissions = [], isLoading } = useQuery({
    queryKey: ["contact_submissions"],
    queryFn: async () => {
      const { data, error } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const markReadMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("contact_submissions").update({ is_read: true, status: "read" }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["contact_submissions"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact_submissions"] });
      toast({ title: "Deleted!" });
    },
  });

  const viewSubmission = (item: any) => {
    setSelected(item);
    if (!item.is_read) markReadMutation.mutate(item.id);
  };

  const unreadCount = submissions.filter((s: any) => !s.is_read).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Contact Submissions
          {unreadCount > 0 && <Badge variant="destructive">{unreadCount} new</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? <p>Loading...</p> : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8"></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-24">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((item: any) => (
                <TableRow key={item.id} className={!item.is_read ? "bg-primary/5 font-medium" : ""}>
                  <TableCell>{item.is_read ? <MailOpen className="w-4 h-4 text-muted-foreground" /> : <Mail className="w-4 h-4 text-primary" />}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.subject || "-"}</TableCell>
                  <TableCell>{format(new Date(item.created_at), "dd MMM yyyy")}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" onClick={() => viewSubmission(item)}><Eye className="w-4 h-4" /></Button>
                      <Button size="icon" variant="ghost" onClick={() => deleteMutation.mutate(item.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {submissions.length === 0 && (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Koi submission nahi aayi abhi tak.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        )}

        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent>
            <DialogHeader><DialogTitle>Contact Details</DialogTitle></DialogHeader>
            {selected && (
              <div className="space-y-3">
                <div><strong>Name:</strong> {selected.name}</div>
                <div><strong>Email:</strong> <a href={`mailto:${selected.email}`} className="text-primary underline">{selected.email}</a></div>
                {selected.phone && <div><strong>Phone:</strong> <a href={`tel:${selected.phone}`} className="text-primary underline">{selected.phone}</a></div>}
                {selected.subject && <div><strong>Subject:</strong> {selected.subject}</div>}
                <div><strong>Message:</strong></div>
                <p className="bg-muted p-3 rounded-lg text-sm whitespace-pre-wrap">{selected.message}</p>
                <div className="text-xs text-muted-foreground">{format(new Date(selected.created_at), "dd MMM yyyy, hh:mm a")}</div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ContactManager;
