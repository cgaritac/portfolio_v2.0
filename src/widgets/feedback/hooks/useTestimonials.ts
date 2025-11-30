import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { andrea, brenes, elias, adrian, floriana, paolo } from "../assets";

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export const useTestimonials = (): Testimonial[] => {
  const { t } = useTranslation();

  return useMemo(() => [
    {
      testimonial: t("feedback.testimonials.elias.testimonial"),
      name: "Andrés Elías Vargas",
      designation: t("feedback.testimonials.elias.designation"),
      company: "Kaiser Permanente",
      image: elias,
    },
    {
      testimonial: t("feedback.testimonials.andrea.testimonial"),
      name: "Andrea Benavides",
      designation: t("feedback.testimonials.andrea.designation"),
      company: "Critical Mass Latam",
      image: andrea,
    },
    {
      testimonial: t("feedback.testimonials.brenes.testimonial"),
      name: "Luis Brenes",
      designation: t("feedback.testimonials.brenes.designation"),
      company: "Factor K Software",
      image: brenes,
    },
    {
      testimonial: t("feedback.testimonials.adrian.testimonial"),
      name: "Adrian Carmiol",
      designation: t("feedback.testimonials.adrian.designation"),
      company: "Critical Mass Latam",
      image: adrian,
    },
    {
      testimonial: t("feedback.testimonials.floriana.testimonial"),
      name: "Floriana Fonseca",
      designation: t("feedback.testimonials.floriana.designation"),
      company: "Critical Mass Latam",
      image: floriana,
    },
    {
      testimonial: t("feedback.testimonials.paolo.testimonial"),
      name: "Paolo Vargas",
      designation: t("feedback.testimonials.paolo.designation"),
      company: "Critical Mass Latam",
      image: paolo,
    },
  ], [t]);
};
