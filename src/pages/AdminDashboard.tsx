import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogOut, LayoutDashboard, FileText, MessageSquare, BookOpen, Star, Image, Search } from "lucide-react";
import AdminGuard from "@/components/admin/AdminGuard";
import ContentManager from "@/components/admin/ContentManager";
import ContactManager from "@/components/admin/ContactManager";
import BlogManager from "@/components/admin/BlogManager";
import TestimonialManager from "@/components/admin/TestimonialManager";
import ImageManager from "@/components/admin/ImageManager";
import SEOManager from "@/components/admin/SEOManager";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const { data: stats } = useQuery({
    queryKey: ["admin_stats"],
    queryFn: async () => {
      const [content, contacts, posts, testimonials] = await Promise.all([
        supabase.from("site_content").select("id", { count: "exact", head: true }),
        supabase.from("contact_submissions").select("id, is_read", { count: "exact" }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("testimonials").select("id", { count: "exact", head: true }),
      ]);
      const unread = contacts.data?.filter((c: any) => !c.is_read).length || 0;
      return {
        content: content.count || 0,
        contacts: contacts.count || 0,
        unread,
        posts: posts.count || 0,
        testimonials: testimonials.count || 0,
      };
    },
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <AdminGuard>
      <div className="min-h-screen bg-muted/30">
        <header className="bg-primary text-primary-foreground px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6" />
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground/80" onClick={() => navigate("/")}>
              View Site
            </Button>
            <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-1" /> Logout
            </Button>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 flex-wrap h-auto gap-1">
              <TabsTrigger value="overview" className="gap-1"><LayoutDashboard className="w-4 h-4" /> Overview</TabsTrigger>
              <TabsTrigger value="content" className="gap-1"><FileText className="w-4 h-4" /> Content</TabsTrigger>
              <TabsTrigger value="images" className="gap-1"><Image className="w-4 h-4" /> Images</TabsTrigger>
              <TabsTrigger value="contacts" className="gap-1"><MessageSquare className="w-4 h-4" /> Contacts {stats?.unread ? `(${stats.unread})` : ""}</TabsTrigger>
              <TabsTrigger value="blog" className="gap-1"><BookOpen className="w-4 h-4" /> Blog</TabsTrigger>
              <TabsTrigger value="testimonials" className="gap-1"><Star className="w-4 h-4" /> Testimonials</TabsTrigger>
              <TabsTrigger value="seo" className="gap-1"><Search className="w-4 h-4" /> SEO</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Site Content", value: stats?.content || 0, icon: FileText, color: "text-blue-600", tab: "content" },
                  { label: "Contact Enquiries", value: stats?.contacts || 0, icon: MessageSquare, color: "text-green-600", tab: "contacts", sub: stats?.unread ? `${stats.unread} unread` : undefined },
                  { label: "Blog Posts", value: stats?.posts || 0, icon: BookOpen, color: "text-purple-600", tab: "blog" },
                  { label: "Testimonials", value: stats?.testimonials || 0, icon: Star, color: "text-yellow-600", tab: "testimonials" },
                ].map((s) => (
                  <Card key={s.label} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveTab(s.tab)}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{s.label}</p>
                          <p className="text-3xl font-bold mt-1">{s.value}</p>
                          {s.sub && <p className="text-xs text-destructive mt-1">{s.sub}</p>}
                        </div>
                        <s.icon className={`w-10 h-10 ${s.color} opacity-20`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="content"><ContentManager /></TabsContent>
            <TabsContent value="images"><ImageManager /></TabsContent>
            <TabsContent value="contacts"><ContactManager /></TabsContent>
            <TabsContent value="blog"><BlogManager /></TabsContent>
            <TabsContent value="testimonials"><TestimonialManager /></TabsContent>
          </Tabs>
        </div>
      </div>
    </AdminGuard>
  );
};

export default AdminDashboard;
