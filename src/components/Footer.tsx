import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 px-4 md:px-6 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-neutral-400">Pages</h4>
                <ul className="space-y-4 text-neutral-400 text-sm">
                    <li><Link href="#work" className="hover:text-white transition-colors">Work</Link></li>
                    <li><Link href="#shop" className="hover:text-white transition-colors">Shop</Link></li>
                    <li><Link href="#blog" className="hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                    <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-neutral-400">Work</h4>
                <ul className="space-y-4 text-neutral-400 text-sm">
                    <li><Link href="#" className="hover:text-white transition-colors">Halo</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Meridian</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Atlas</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Voxel</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-neutral-400">Products</h4>
                <ul className="space-y-4 text-neutral-400 text-sm">
                    <li><Link href="#" className="hover:text-white transition-colors">Guidy</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Feature</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Keynote</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Enroll</Link></li>
                </ul>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-neutral-500">
            <p>© Refined. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
