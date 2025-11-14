import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import AppStore from "@/components/app-store"
import Footer from "@/components/footer"
import GroupDiscountPromo from "@/components/descont-promo"
import BarzaProductsShowcase from "@/components/barza-products"
import BlogPage from "@/components/BlogPage"
import BlogPreview from "@/components/blogPreview"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <GroupDiscountPromo />
       <BlogPreview/>
      <BarzaProductsShowcase />
      <Features />
      <AppStore />
      <Footer />
    </div>
  )
}
