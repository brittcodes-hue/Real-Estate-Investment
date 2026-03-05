import { motion } from 'framer-motion';
import { Star, Award, CheckCircle, Shield, ExternalLink } from 'lucide-react';
import { TestimonialCard, TrustBadge } from '@/components/Cards';
import { testimonials } from '@/data';
import { IMAGES } from '@/assets/images';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HAPPY_FAMILY_5}
            alt="Happy family in their home"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              What Our Clients Are Saying
            </h1>
            <p className="text-xl text-muted-foreground">
              Real stories from Colorado homeowners and investors who trusted GMASH
              with their most important asset
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
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={staggerItem}>
              <TrustBadge
                icon={<Award className="w-8 h-8" />}
                text="Licensed Investors"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <TrustBadge
                icon={<CheckCircle className="w-8 h-8" />}
                text="Colorado Based"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <TrustBadge
                icon={<Star className="w-8 h-8" />}
                text="5-Star Rated"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <TrustBadge
                icon={<Shield className="w-8 h-8" />}
                text="Fully Insured"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={staggerItem}>
                <TestimonialCard
                  name={testimonial.name}
                  location={testimonial.location}
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">{renderStars(5)}</div>
              </div>
              <h2 className="text-3xl font-bold mb-4">See More Reviews on Google</h2>
              <p className="text-muted-foreground mb-8">
                Read hundreds of verified reviews from Colorado homeowners and
                investors who have worked with GMASH
              </p>
              <Button
                size="lg"
                className="gap-2"
                onClick={() =>
                  window.open(
                    'https://www.google.com/search?q=gmash+reviews',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                View Google Reviews
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Card>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Trust Badges</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verified credentials and certifications that demonstrate our
              commitment to excellence
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={staggerItem}>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">BBB Accredited</h3>
                <p className="text-muted-foreground">
                  Better Business Bureau verified business with A+ rating
                </p>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Google Verified</h3>
                <p className="text-muted-foreground">
                  Verified business with hundreds of authentic customer reviews
                </p>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Licensed Colorado Investor
                </h3>
                <p className="text-muted-foreground">
                  Fully licensed and insured real estate investment company
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the GMASH Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied Colorado homeowners and investors who
              trusted us with their real estate needs
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              onClick={() => (window.location.href = '/#contact')}
            >
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
