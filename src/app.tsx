import logo from "./assets/logo-expert-voice.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";


const note = {
  date: new Date(),
  content: 'Hello'
}

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />
      <form className="w-full ">
        <input
          type="text"
          placeholder="Busque em suas notas ..."
          className="w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500"
        />
      </form>
      <div className="h-px bg-slate-400" />
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />        
        <NoteCard note={note}/>
      </div>
    </div>
  );
}
