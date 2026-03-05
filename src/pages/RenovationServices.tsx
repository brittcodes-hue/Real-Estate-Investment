import { motion } from 'framer-motion';
import { Home, Droplet, ClipboardList, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { renovationServices, whyChooseGmash } from '@/data/index';
import { ContactForm } from '@/components/ContactForm';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

const iconMap = {
  Home,
  Droplet,
  ClipboardList,
  TrendingUp,
};

export default function RenovationServices() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.RENOVATION_HERO_3}
            alt="Modern home renovation transformation"
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
              Professional Renovation Services & Investment Consulting
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert home renovation services and fix & flip project management across Colorado. We help homeowners increase property value and investors maximize returns through strategic renovations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {renovationServices.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.id}
                  variants={staggerItem}
                  className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Before & After Transformations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we transform properties across Colorado through expert renovation and strategic improvements that maximize value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src={IMAGES.CONSTRUCTION_TOOLS_1}
                alt="Home renovation before transformation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
                <div>
                  <span className="inline-block px-4 py-2 bg-destructive/90 text-destructive-foreground rounded-full text-sm font-semibold mb-3">
                    Before
                  </span>
                  <p className="text-foreground font-medium">
                    Outdated kitchen with worn cabinets and limited functionality
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src={IMAGES.KITCHEN_RENOVATION_1}
                alt="Modern kitchen renovation after transformation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
                <div>
                  <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-3">
                    After
                  </span>
                  <p className="text-foreground font-medium">
                    Modern, open-concept kitchen with premium finishes and increased home value
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto text-lg"
          >
            Our renovation expertise transforms outdated properties into modern, high-value homes. From strategic kitchen and bath upgrades to complete home transformations, we deliver results that exceed expectations and maximize ROI for homeowners and investors.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose GMASH
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience, integrity, and a commitment to excellence set us apart in the Colorado real estate and renovation market.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {whyChooseGmash.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your Renovation Project
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a free consultation to discuss your renovation goals, timeline, and budget. We'll help you create a strategic plan that maximizes value.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-2xl">
              <ContactForm defaultServiceType="renovation-consultation" />
            </div>

            <div className="mt-12 text-center">
              <a
                href="tel:720.663.7346"
                className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent transition-colors"
              >
                Or call us directly: 720.663.7346
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
