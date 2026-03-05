import { motion } from "framer-motion";
import { Home, TrendingUp, Handshake, Building2, MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { IMAGES } from "@/assets/images";
import { CONTACT_INFO } from "@/lib/index";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export default function RealEstate() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Buy Your Dream Home",
      description: "Expert guidance through every step of the home buying process. We help first-time buyers and seasoned investors find properties that match their vision and budget."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sell with Confidence",
      description: "Strategic marketing and pricing to maximize your property's value. Our proven track record ensures your home sells quickly and at the best possible price."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Investment Opportunities",
      description: "Partner with us on refined, equitable real estate investments. We identify high-potential properties and transform them through design-forward renovations."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Portfolio Development",
      description: "Build lasting wealth through strategic property acquisition. We help investors create diversified portfolios across Denver's most desirable neighborhoods."
    }
  ];

  const neighborhoods = [
    "Capitol Hill",
    "Cherry Creek",
    "Highland",
    "Washington Park",
    "LoDo",
    "RiNo"
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.DENVER_SKYLINE_2} 
            alt="Denver Colorado skyline with mountain backdrop" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Buy, Sell, Invest
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A brokerage built on experience, integrity, and a deep understanding of the Denver market
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-semibold hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-lg"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you're looking to buy your first home, sell with confidence, or explore investment opportunities, we're here to guide you every step of the way.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-card p-8 rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <img 
                src={IMAGES.INVESTMENT_PROPERTY_3} 
                alt="Modern investment property in Denver" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Investment Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We partner with select investors to transform and elevate properties throughout Denver's most desirable neighborhoods. Our approach blends design-forward renovations with strategic resale for lasting value.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Interested in making refined, equitable investments in real estate? Let's build something exceptional together.
              </p>

              <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Featured Neighborhoods
                </h3>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((neighborhood, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-background rounded-xl text-sm font-medium border border-border"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose GMASH</h2>
            <p className="text-xl text-muted-foreground">
              Experience, integrity, and results-driven service in every transaction
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8"
          >
            {[
              {
                stat: "8+",
                label: "Years Experience",
                description: "Deep market knowledge"
              },
              {
                stat: "100+",
                label: "Properties Sold",
                description: "Proven track record"
              },
              {
                stat: "100%",
                label: "Client Satisfaction",
                description: "Dedicated service"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-card p-8 rounded-3xl border border-border text-center shadow-lg"
              >
                <div className="text-5xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-xl font-semibold mb-2">{item.label}</div>
                <div className="text-muted-foreground">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk Real Estate</h2>
              <p className="text-xl text-muted-foreground">
                Ready to buy, sell, or invest? Contact us today for a free consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springPresets.gentle, delay: 0.1 }}
              className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl"
            >
              <ContactForm defaultServiceType="real-estate-services" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center text-center md:text-left"
            >
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
              <span className="hidden md:block text-muted-foreground">|</span>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                {CONTACT_INFO.email}
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}