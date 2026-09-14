CREATE TABLE public.engineering_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  functions TEXT[] NOT NULL DEFAULT '{}',
  application TEXT,
  voltage TEXT,
  power_target TEXT,
  max_current TEXT,
  dimensions TEXT,
  construction TEXT,
  exit_location TEXT,
  sensor_requirements TEXT,
  annual_volume TEXT,
  description TEXT NOT NULL,
  nda_required BOOLEAN NOT NULL DEFAULT false,
  drawing_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.engineering_reviews TO anon;
GRANT INSERT, SELECT ON public.engineering_reviews TO authenticated;
GRANT ALL ON public.engineering_reviews TO service_role;

ALTER TABLE public.engineering_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an engineering review"
ON public.engineering_reviews FOR INSERT TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Anyone can upload an engineering review drawing"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'engineering-review-uploads');