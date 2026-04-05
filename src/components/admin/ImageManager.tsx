import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Image, Upload, Trash2, Copy, Search, FolderOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const BUCKET = "site-images";

const ImageManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [search, setSearch] = useState("");
  const [folder, setFolder] = useState("");
  const [newFolder, setNewFolder] = useState("");

  const { data: images = [], isLoading } = useQuery({
    queryKey: ["site-images", folder],
    queryFn: async () => {
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .list(folder || undefined, { limit: 200, sortBy: { column: "created_at", order: "desc" } });
      if (error) throw error;
      return data || [];
    },
  });

  const getPublicUrl = (name: string) => {
    const path = folder ? `${folder}/${name}` : name;
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return data.publicUrl;
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = form.querySelector<HTMLInputElement>('input[type="file"]');
    const files = fileInput?.files;
    if (!files?.length) return;

    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const ext = file.name.split(".").pop();
        const name = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
        const path = newFolder ? `${newFolder}/${name}` : folder ? `${folder}/${name}` : name;

        const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
          cacheControl: "3600",
          upsert: false,
        });
        if (error) throw error;
      }
      toast({ title: `${files.length} image(s) uploaded!` });
      queryClient.invalidateQueries({ queryKey: ["site-images"] });
      setUploadOpen(false);
      setNewFolder("");
    } catch (err: any) {
      toast({ title: "Upload failed", description: err.message, variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (name: string) => {
    if (!confirm("Delete this image?")) return;
    const path = folder ? `${folder}/${name}` : name;
    const { error } = await supabase.storage.from(BUCKET).remove([path]);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Image deleted" });
      queryClient.invalidateQueries({ queryKey: ["site-images"] });
    }
  };

  const copyUrl = (name: string) => {
    const url = getPublicUrl(name);
    navigator.clipboard.writeText(url);
    toast({ title: "URL copied to clipboard!" });
  };

  const folders = images.filter((f) => f.id === null);
  const files = images
    .filter((f) => f.id !== null)
    .filter((f) => !search || f.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Image className="w-5 h-5" />
              Image Manager
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Upload & manage logos, team photos, banners etc.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search images..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button onClick={() => setUploadOpen(true)} className="gap-2">
              <Upload className="w-4 h-4" />
              Upload
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Breadcrumb */}
        {folder && (
          <div className="flex items-center gap-2 mb-4 text-sm">
            <button onClick={() => setFolder("")} className="text-primary hover:underline font-medium">
              Root
            </button>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">{folder}</span>
          </div>
        )}

        {isLoading ? (
          <p className="text-center py-8 text-muted-foreground">Loading images...</p>
        ) : (
          <>
            {/* Folders */}
            {folders.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
                {folders.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => setFolder(folder ? `${folder}/${f.name}` : f.name)}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                  >
                    <FolderOpen className="w-8 h-8 text-primary" />
                    <span className="text-xs font-medium truncate w-full text-center">{f.name}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Images Grid */}
            {files.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">
                {search ? "No images match your search." : "No images uploaded yet. Click Upload to add images."}
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {files.map((file) => (
                  <div
                    key={file.name}
                    className="group relative border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square bg-muted/30">
                      <img
                        src={getPublicUrl(file.name)}
                        alt={file.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-xs truncate text-muted-foreground">{file.name}</p>
                    </div>
                    {/* Actions overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button size="icon" variant="secondary" className="w-8 h-8" onClick={() => copyUrl(file.name)}>
                        <Copy className="w-3.5 h-3.5" />
                      </Button>
                      <Button size="icon" variant="destructive" className="w-8 h-8" onClick={() => handleDelete(file.name)}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 text-xs text-muted-foreground text-right">
              {files.length} image(s) {folder && `in ${folder}`}
            </div>
          </>
        )}

        {/* Upload Dialog */}
        <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Images</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <Label>Folder (optional)</Label>
                <Input
                  placeholder="e.g. team, logos, banners"
                  value={newFolder}
                  onChange={(e) => setNewFolder(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">Leave empty to upload to {folder || "root"}</p>
              </div>
              <div>
                <Label>Select Images</Label>
                <Input type="file" accept="image/*" multiple required className="cursor-pointer" />
              </div>
              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={() => setUploadOpen(false)}>Cancel</Button>
                <Button type="submit" disabled={uploading}>
                  {uploading ? "Uploading..." : "Upload"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ImageManager;
