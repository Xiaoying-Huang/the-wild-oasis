
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://cdrijdtzyxxbuyrjjzem.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcmlqZHR6eXh4YnV5cmpqemVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1ODAwNTAsImV4cCI6MjAwOTE1NjA1MH0.7jKNpM1SSDRZXLGdF_65PT3EFd4eFtronjCcRTXo51A"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;