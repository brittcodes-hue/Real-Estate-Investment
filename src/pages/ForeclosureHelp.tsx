import { motion } from 'framer-motion';
import { Home, Clock, Shield, Heart, ExternalLink, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { faqData } from '@/data/index';
import { CONTACT_INFO, EXTERNAL_RESOURCES } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function ForeclosureHelp() {
  const processSteps = [
    {
      title: 'Notice of Default',
      description: 'After 30 days of missed payments, your lender files a Notice of Election and Demand with the county. This officially starts the foreclosure process.',
      timeline: 'Day 30'
    },
    {
      title: 'Notice of Sale',
      description: 'Between 110-125 days, a Notice of Sale is published in local newspapers and posted on the property. This sets the auction date.',
      timeline: 'Day 110-125'
    },
    {
      title: 'Public Auction',
      description: 'The property is sold at public auction, typically on the courthouse steps. The highest bidder takes ownership.',
      timeline: 'Day 125-160'
    },
    {
      title: 'Post-Auction',
      description: 'If the property sells, you typically have a short period to vacate. Any remaining equity after paying the lender goes to you.',
      timeline: 'After Auction'
    }
  ];

  const trustPoints = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Confidential Support',
      description: 'Your situation is private. We handle everything with discretion and respect.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time-Sensitive Action',
      description: 'Every day matters. We move quickly to explore all available options.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Compassionate Guidance',
      description: 'We understand the stress. Our team provides empathetic, judgment-free help.'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Multiple Solutions',
      description: 'From loan modification to quick sale, we find the path that works for you.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HAPPY_FAMILY_3}
            alt="Colorado family in their home"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Facing Foreclosure? We Can Help.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              You're not alone, and you have options. GMASH provides compassionate, confidential support to help Colorado homeowners preserve their homes, protect their credit, and find the best path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <a href="#contact-form">Get Free Consultation</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {CONTACT_INFO.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {trustPoints.map((point, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {point.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground text-sm">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">Understanding the Colorado Foreclosure Process</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Colorado uses a non-judicial foreclosure process, which means the lender can foreclose without going to court. However, you have rights and options at every stage. Here's what to expect:
            </p>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springPresets.gentle, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {step.timeline}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="mt-12 p-8 bg-accent/10 border border-accent/20 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">Important: You Have Time to Act</h3>
              <p className="text-muted-foreground text-center mb-6">
                The foreclosure process in Colorado typically takes 4-6 months from the first missed payment to auction. This gives you time to explore alternatives, negotiate with your lender, or sell your property. The earlier you take action, the more options you have.
              </p>
              <div className="text-center">
                <Button size="lg" asChild>
                  <a href="#contact-form">Explore Your Options Now</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Get answers to common questions about foreclosure in Colorado. If you don't see your question here, contact us for a free consultation.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Act Now — Free Confidential Consultation</h2>
                  <p className="text-lg text-muted-foreground">
                    Every day matters when facing foreclosure. The sooner you reach out, the more options we can explore together. Our team is here to help you find the best path forward — with no judgment, no pressure, and no cost for the initial consultation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">100% Confidential</h3>
                      <p className="text-sm text-muted-foreground">Your information is private and secure. We never share your details.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Fast Response</h3>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours, often same-day for urgent situations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">No Obligation</h3>
                      <p className="text-sm text-muted-foreground">Free consultation with no pressure to commit. Just honest guidance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Home className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Multiple Solutions</h3>
                      <p className="text-sm text-muted-foreground">We explore every option to help you preserve your home and dignity.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="text-lg" asChild>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: {CONTACT_INFO.phone}
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">Or fill out the form below for a callback</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Free Foreclosure Resources</h2>
              <p className="text-lg text-muted-foreground">
                We believe everyone deserves access to help. Here are free resources available to Colorado homeowners regardless of whether you work with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">U.S. Department of Housing and Urban Development</h3>
                  <p className="text-muted-foreground mb-4">
                    HUD offers free foreclosure counseling, resources, and guidance for homeowners facing financial hardship. Their certified counselors can help you understand your options.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={EXTERNAL_RESOURCES.hud} target="_blank" rel="noopener noreferrer">
                      Visit HUD Resources
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Colorado Foreclosure Hotline</h3>
                  <p className="text-muted-foreground mb-4">
                    Free foreclosure prevention counseling specifically for Colorado homeowners. Get expert advice on your rights, options, and next steps from local professionals.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={EXTERNAL_RESOURCES.coloradoHotline} target="_blank" rel="noopener noreferrer">
                      Visit Colorado Hotline
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get Your Free Consultation</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll contact you within 24 hours to discuss your situation and explore your options. All information is kept strictly confidential.
              </p>
            </div>
            <ContactForm defaultServiceType="foreclosure-help" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
