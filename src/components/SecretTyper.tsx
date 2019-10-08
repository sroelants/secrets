import React, { useEffect, useState } from 'react';

const secrets: string[] = [
  `A month after being raped, I went and seduced my rapist.
   I thought if it was my choice and I initiated the sex it
   would make things better. It didn’t.`,
  `My youth group is one of the things keeping me from killing myself.
  I'm the youth pastor.`,
  `Last week when I was shopping, the lady ahead of me dropped a
   $20 bill on the ground.  Instead of saying anything, I quickly
   stepped on it and claimed it as my own.`];

export const SecretTyper: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(50);
  const [loop, setLoop] = useState(0);

  const i: number = loop % secrets.length
  const secret = secrets[i];

  const handleTyping = () => {
    // Change text and speed.
    setText(
      isDeleting
        ? secret.substring(0, text.length - 1)
        : secret.substring(0, text.length + 1)
    );

    // Get new delay
    setDelay(
      isDeleting
        ? 20
        : text[text.length - 1] === '.'
          ? 400 // Pause at a period for realism.
          : 40
    );

    // Test whether finished typing
    if (!isDeleting && text === secret) {
      // Pause and start deleting
      setTimeout(() => setIsDeleting(true), 1000);
    }

    // Test whether finished deleting
    if (isDeleting && text === "") {
      // Done deleting, load new secret (by increasing loop number)
      setIsDeleting(false);
      setLoop(loop + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(handleTyping, delay);
    return () => clearInterval(timer)
  });
  return <div className="header__secret"> {text} <span id="cursor" /></div>
}
