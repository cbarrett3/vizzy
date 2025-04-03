export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center p-8">
      <main className="flex flex-col items-center gap-6 max-w-2xl">
        <h1 className="text-6xl font-bold" style={{ color: "#5CFFE7" }}>
          Vizzy
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Use natural language to generate D3.js visualizations directly in your codebase. An MCP server that transforms how developers interact with data.
        </p>
        <a
          href="https://twitter.com/cbarrett_97"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-400 transition-colors mt-4"
        >
          @cbarrett_97
        </a>
        <p className="text-gray-600 mt-16">
          Created by v0. This project is in very early stages... as you can clearly see lol
        </p>
      </main>
    </div>
  );
}
