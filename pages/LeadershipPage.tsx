
import React from 'react';
import { motion } from 'framer-motion';

const leaders = [
  { name: 'Colonial–Neo-Classical Architecture', years: '', role: 'The central dome symbolizes divine presence and serves as the visual focal point of the space.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770536217/e1ae1f4b-e6a9-42fa-bf6e-a2c4ebc435a5.png' },
  { name: 'Arched Windows', years: '', role: 'Semi-circular arched windows, characteristic of Neo-Classical and Colonial church architecture, provide structural clarity while enhancing rhythm and visual balance along the façade.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770536280/92c562e7-eac2-4359-b688-77b074821d47.png' },
  { name: 'Colonial–Baroque Detailing', years: '', role: 'The highly ornamented arched doorway reflects Colonial–Baroque influence, showcasing intricate craftsmanship and decorative depth that mark the ceremonial threshold of the cathedral.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770536286/a6677feb-8327-4d8b-91bd-2f1cf618e130.png' },
  { name: 'Corinthian Columns', years: '', role: 'Colonial–Neo-Classical Corinthian columns express grandeur and divinity, reinforcing vertical emphasis and serving as strong visual anchors within the sacred space.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770536293/1d1bd37a-5854-4544-8b34-cb7b719c78fd.png' },
  { name: 'Rose Window', years: '', role: 'The circular rose window reflects Colonial–Neo-Classical design, allowing light to enter symbolically while serving as a refined focal element within the sacred interior.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770536302/35080fef-1ec8-4da3-9355-22403ddf4b1c.png' },
  { name: 'Colonnade', years: '', role: 'A rhythmic Neo-Classical colonnade defines the interior procession, creating depth and visual order while guiding movement toward the altar and reinforcing spiritual progression.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770536323/3077f6db-d38d-42b6-b6ae-ea4399348933.png' },
  { name: 'Canopied Facade', years: '', role: 'Traditional tiled canopies along the colonial façade create rhythmic shading and a human-scale transition, softening the boundary between sacred interiors and the outdoor walkway.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770536331/1404a662-e6b9-4b9f-8207-3a3e0396901d.png' },
  { name: 'Marian Niche', years: '', role: 'An arched façade niche framed in Colonial–Neo-Classical language, housing a Marian statue that reinforces devotional focus and vertical hierarchy on the exterior elevation.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770536340/c21bf55f-620c-4420-b714-48447015e6d3.png' },
  { name: 'Timber Truss Roof', years: '', role: 'An exposed timber roof with a repetitive truss system, establishing rhythmic order, material warmth, and structural clarity while reinforcing the vertical volume of the nave.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770536349/a8a38739-ac99-4f82-8388-b921dd729f9c.png' },
  { name: 'Site Zoning Diagram', years: '', role: 'The cathedral forms the spiritual core of the site, with priest’s residence and dining placed nearby for functional support, while the administration block is kept separate. A clear main entrance defines the ceremonial approach and organizes movement across the site.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770544341/ade5c70a-d532-4f96-87d3-500d12292ca8.png' },
  { name: 'Design Concept', years: '', role: 'The cathedral is organised on a cruciform plan, with a clear axis from the narthex to the apse. The nave leads to the crossing as the symbolic centre, while side aisles and the ambulatory allow smooth movement around the sacred core.', image: 'https://res.cloudinary.com/dqpszrpnf/image/upload/v1770544525/3a6baca6-b4b3-42d8-bca2-44873820be6e_hbzaot.png' },
];

const LeadershipPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 px-6 bg-off-white">
      <div className="max-w-[100rem] mx-auto">
        <div className="text-center mb-32">
          <span className="font-paragraph text-[10px] uppercase tracking-[0.5em] text-soft-gold mb-6 block">ARCHITECTURAL CHARACTER</span>
          <h1 className="font-heading text-6xl md:text-8xl text-deep-brown italic mb-8">Sacred Architecture</h1>
          <p className="font-paragraph text-xl text-deep-brown/50 max-w-3xl mx-auto font-light leading-relaxed">
           Exploring the architectural evolution of Mother of God Cathedral, where form, faith, and tradition converge across time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden clip-arch mb-10 shadow-lg">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-deep-brown/20 group-hover:opacity-0 transition-opacity duration-700" />
              </div>
              <h3 className="font-heading text-3xl text-deep-brown mb-2">{leader.name}</h3>
              <p className="font-paragraph text-[10px] uppercase tracking-widest text-soft-gold mb-2">{leader.role}</p>
              <p className="font-paragraph text-sm text-deep-brown/40">{leader.years}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;
