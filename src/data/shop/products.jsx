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
    name: "Elegant Wedding Invitation Card",
    description: "Elegant design for weddings.",
    image: "/images/08cf49e6-0d9e-4035-8887-7ef44eac7d71.jpeg",
    price: 250,
  },
  {
    id: 2,
    name: "Modern Invitation Card",
    description: "Modern and minimalistic.",
    image: "/images/SG_09411.jpeg",
    price: 300,
  },
  {
    id: 3,
    name: "Vintage Invitation Card",
    description: "Vintage style for timeless events.",
    image: "/images/3F667D2A-84DC-4CD5-B50E-C1E94B9A31E4.jpeg",
    price: 275,
  },
  {
    id: 4,
    name: "Classic Invitation Card",
    description: "A bold vintage-inspired design with intricate detailing and a classic finish.",
    image: "/images/5ff0dde5-055f-4c2e-8341-60d06eeb4f89.jpeg",
    price: 420,
  },
  {
    id: 5,
    name: "Retro Invitation Card Design",
    description: "A sophisticated retro-themed card, perfect for milestone celebrations or anniversaries.",
    image: "/images/878ea1de-812c-4fa2-8c45-b5249ae97c68.jpeg",
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
    image: "/images/471e88b3-d486-4e4c-88f7-686290c5f766.jpeg",
    price: 100,
  },
  {
    id: 2,
    name: "Envelope B",
    description: "Stylish and functional.",
    image: "/images/c065d61c-64d4-4e3e-ae00-c0e98b9df094.jpeg",
    price: 150,
  },
  {
    id: 3,
    name: "Envelope C",
    description: "Elegant design for weddings.",
    image: "/images/IMG_7462.JPG",
    price: 125,
  },
].map((envelope) => ({
  ...envelope,
  slug: slugify(envelope.name),
}));

export { invitationCards, envelopes, slugify };
