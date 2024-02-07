export function NoteCard() {
  return (
    <button className="text-left hover:ring-2 hover:ring-slate-600 rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        temporibus exercitationem tempora saepe sapiente ut laudantium.
        Architecto ducimus quo, corrupti laboriosam quam assumenda ipsum, magnam
        labore adipisci minima voluptate dolores.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-black/0 pointer-events-none" />
    </button>
  );
}
