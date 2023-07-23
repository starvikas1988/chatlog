import React, { useState } from 'react';

function SpellForm({ addSpell ,usersName}) {
  const [spell, setSpell] = useState({ name: usersName, description: '', effect: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSpell((prevSpell) => ({ ...prevSpell, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (spell.name.trim() !== '' && spell.description.trim() !== '' && spell.effect.trim() !== '') {
      addSpell({ ...spell, id: Date.now() });
      setSpell({ name: usersName, description: '', effect: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={spell.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Message
        </label>
        <textarea
          name="description"
          id="description"
          className="form-control"
          rows="3"
          value={spell.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="effect" className="form-label">
          Reply
        </label>
        <input
          type="text"
          name="effect"
          id="effect"
          className="form-control"
          value={spell.effect}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Message
      </button>
    </form>
  );
}

export default SpellForm;