import React, { useState } from 'react';
import SpellForm from './SpellForm';
import SpellList from './SpellList';

function App() {
  const [spells, setSpells] = useState([]);

  const addSpell = (spell) => {
    setSpells((prevSpells) => [...prevSpells, spell]);
  };

  const updateSpell = (updatedSpell) => {
    setSpells((prevSpells) =>
      prevSpells.map((spell) => (spell.id === updatedSpell.id ? updatedSpell : spell))
    );
  };

  const deleteSpell = (spellId) => {
    setSpells((prevSpells) => prevSpells.filter((spell) => spell.id !== spellId));
  };

  return (
    <div className="container">
      <h1 className="text-center">Magical Spellbook</h1>
      <SpellForm addSpell={addSpell} />
      <SpellList spells={spells} updateSpell={updateSpell} deleteSpell={deleteSpell} />
    </div>
  );
}

export default App;