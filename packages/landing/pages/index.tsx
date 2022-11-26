export default function Home() {
  return (
    <main className="flex flex-col max-w-[1440px] w-full mx-auto py-[30px] px-[32px] md:px-[64px] lg:px-[120px] h-screen items-center justify-center">
      <div className="w-full flex items-center justify-center mb-[30px]">
        <picture>
          <img src="/logo.svg" height="150" width="150" className="h-[150px] w-[150px]" />
        </picture>
      </div>
      <h1 className="text-[64px] font-bold text-center">Oaky</h1>
      <p className="text-[20px] text-center">Coming soon...(hopefully🤞)</p>
    </main>
  )
}
