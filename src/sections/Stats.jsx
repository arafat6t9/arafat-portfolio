import { motion } from "framer-motion"
const stats=[
 {number:"9",label:"e-GP & manual tenders completed in a single month"},
 {number:"৳5 Cr+",label:"Highest-value tender bid handled"},
 {number:"42+",label:"Electrical equipment consignments managed"},
 {number:"48",label:"Substation close-outs and handovers managed"},
 {number:"7.4 MW",label:"Solar project bid package prepared within 9 days"},
 {number:"6",label:"Grid substations supported in testing & commissioning"},
]
export default function Stats(){return <section id="impact" className="py-32 px-6 bg-white/[.02]"><div className="max-w-7xl mx-auto"><p className="section-kicker">Measured impact</p><h2 className="section-title">Numbers behind the work.</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mt-16">{stats.map((s,i)=><motion.div key={s.number} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*.07}} className="bg-[#050816] p-9 md:p-12"><strong className="text-4xl md:text-5xl font-black text-cyan-400">{s.number}</strong><p className="text-gray-400 mt-5 leading-relaxed">{s.label}</p></motion.div>)}</div></div></section>}
