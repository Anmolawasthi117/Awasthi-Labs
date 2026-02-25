export const NewsletterSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #27272a, #27272a 1px, transparent 1px, transparent 10px)' }}></div>
      <div className="relative z-10 p-6 md:p-10 flex flex-col gap-4">
        <h2 className="text-sm font-semibold tracking-tight text-zinc-100">Newsletter</h2>
        <div className="flex flex-col sm:flex-row gap-2 max-w-lg">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-md px-4 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-colors" 
          />
          <button className="px-5 py-2 bg-zinc-200 text-zinc-900 rounded-md text-sm font-medium hover:bg-zinc-100 whitespace-nowrap transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
