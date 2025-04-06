const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

const invitationCards = [
  {
    id: 1,
    name: "Invitation Card A",
    description: "Elegant design for weddings.",
    image: "/images/08cf49e6-0d9e-4035-8887-7ef44eac7d71.jpeg",
    price: 250,
  },
  {
    id: 2,
    name: "Invitation Card B",
    description: "Modern and minimalistic.",
    image: "/images/SG_09411.jpeg",
    price: 300,
  },
  {
    id: 3,
    name: "Invitation Card C",
    description: "Vintage style for timeless events.",
    image: "/images/fd5ba610-e8e1-479c-80ba-c81d08d15438.jpeg",
    price: 275,
  },
  {
    id: 4,
    name: "Invitation Card C",
    description: "Vintage style for timeless events.",
    image: "/images/fd5ba610-e8e1-479c-80ba-c81d08d15438.jpeg",
    price: 420,
  },
  {
    id: 5,
    name: "Invitation Card C",
    description: "Vintage style for timeless events.",
    image: "/images/fd5ba610-e8e1-479c-80ba-c81d08d15438.jpeg",
    price: 692,
  },
].map((card) => ({
  ...card,
  slug: slugify(card.name),
}));

const envelopes = [
  {
    id: 1,
    name: "Envelope A",
    description: "Perfect for any occasion.",
    image: "/images/SG_09411.jpeg",
    price: 100,
  },
  {
    id: 2,
    name: "Envelope B",
    description: "Stylish and functional.",
    image: "/images/SG_09411.jpeg",
    price: 150,
  },
  {
    id: 3,
    name: "Envelope C",
    description: "Elegant design for weddings.",
    image: "/images/SG_09411.jpeg",
    price: 125,
  },
].map((envelope) => ({
  ...envelope,
  slug: slugify(envelope.name),
}));

export { invitationCards, envelopes, slugify };
