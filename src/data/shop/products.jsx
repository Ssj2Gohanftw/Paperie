const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove special characters
    .replace(/\-\-+/g, "-"); // Replace multiple hyphens
};
const invitationCards = [
  {
    id: 1,
    name: "Invitation Card A",
    description: "Elegant design for weddings.",
    image: "/images/08cf49e6-0d9e-4035-8887-7ef44eac7d71.jpeg",
    price: "$2.50",
  },
  {
    id: 2,
    name: "Invitation Card B",
    description: "Modern and minimalistic.",
    image: "/images/SG_09411.jpeg",
    price: "$3.00",
  },
  {
    id: 3,
    name: "Invitation Card C",
    description: "Vintage style for timeless events.",
    image: "/images/fd5ba610-e8e1-479c-80ba-c81d08d15438.jpeg",
    price: "$2.75",
  },
  {
    id: 4,
    name: "Invitation Card C",
    description: "Vintage style for timeless events.",
    image: "/images/fd5ba610-e8e1-479c-80ba-c81d08d15438.jpeg",
    price: "$2.75",
  },
  {
    id: 5,
    name: "Invitation Card C",
    description: "Vintage style for timeless events.",
    image: "/images/fd5ba610-e8e1-479c-80ba-c81d08d15438.jpeg",
    price: "$2.75",
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
    price: "$1.00",
  },
  {
    id: 2,
    name: "Envelope B",
    description: "Stylish and functional.",
    image: "/images/SG_09411.jpeg",
    price: "$1.50",
  },
  {
    id: 3,
    name: "Envelope C",
    description: "Elegant design for weddings.",
    image: "/images/SG_09411.jpeg",
    price: "$1.25",
  },
].map((envelope) => ({
  ...envelope,
  slug: slugify(envelope.name),
}));

export { invitationCards, envelopes, slugify };
