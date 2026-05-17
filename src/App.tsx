import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, ArrowRight, PackageOpen, Download, QrCode, MessageCircle, HeartHandshake, Leaf, Users, Phone, Mail, MapPin, ExternalLink, Send } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

const IMAGES = {
  mission1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260514_062001_a9d99f46-e739-4321-97cb-e8ea4bea5010.png&w=1280&q=85",
  mission2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260514_061911_a7e0e6ed-d2ca-4656-811c-b91cbc1adf78.png&w=1280&q=85",
  mission3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260515_071613_392a05be-c67f-467e-bee5-ee1c9b7b7e4f.png&w=1280&q=85",
  qrBg: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260515_071642_62667796-0bc7-4ed0-8ae5-fbd0a07414f3.png&w=1280&q=85",
  happy5: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260515_071855_8764c925-f02b-43e2-b9ad-e7a24932bd82.png&w=1280&q=85",
  new1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260515_072829_60ce4224-4888-4ede-87ba-9320647e68f9.png&w=1280&q=85",
  new2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260515_073137_4f271f0c-4aa0-42d9-854b-18bb3eabb45c.png&w=1280&q=85"
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SubPage({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="pt-40 pb-32 px-8 max-w-7xl mx-auto min-h-[70vh]">
      <h1 className="text-5xl md:text-7xl font-display text-brand-black">{title}</h1>
      <div className="mt-8 text-brand-gray text-lg max-w-4xl leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function WasWirTunPage() {
  return (
    <div className="pt-40 pb-32 px-8 max-w-7xl mx-auto min-h-[70vh]">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display text-brand-black mb-6">Was wir tun & Wem wir helfen.</h1>
        <p className="text-xl text-brand-gray leading-relaxed mb-6">
          Täglicher Einsatz für Wildtiere und Streunerkatzen. Unbürokratisch, pragmatisch und immer mit ganzem Herzen. Wir haben uns darauf eingerichtet, folgende Stellen mit unserer Hilfe (Sachspenden, Futter, Zubehör, Spielzeug, selbst gemachten Sachen usw.) zu unterstützen:
        </p>
        <ul className="text-lg text-brand-black font-medium text-left inline-block space-y-2 mb-8 bg-brand-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <li className="flex items-center"><Leaf className="w-5 h-5 text-brand-primary mr-3" /> Wildtier-Pflege-Stellen</li>
          <li className="flex items-center"><Leaf className="w-5 h-5 text-brand-primary mr-3" /> Wildtier-Hilfe-Stellen</li>
          <li className="flex items-center"><Leaf className="w-5 h-5 text-brand-primary mr-3" /> Streuner-Stellen (z. B. Katzen)</li>
          <li className="flex items-center"><Leaf className="w-5 h-5 text-brand-primary mr-3" /> Tier-Herbergen</li>
          <li className="flex items-center"><Leaf className="w-5 h-5 text-brand-primary mr-3" /> Gnadenhöfe</li>
        </ul>
        <p className="text-xl text-brand-gray leading-relaxed">
          Was jetzt dann vielleicht noch an Hilfe-Gesuchen an uns herangetragen wird, muss man abwarten. Die Realität wird es zeigen, wer um Hilfe anfragt. Wir sind da offen und wollen niemanden ausschließen. Jeder der Hilfe braucht von den genannten Stellen, kann gerne jederzeit anfragen.
        </p>
        <p className="text-xl font-medium text-brand-primary mt-6">
          Natürlich können wir nur helfen und unterstützen, wenn wir auch Sachen gespendet bekommen!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
         <div className="order-2 md:order-1">
            <h2 className="text-3xl font-display text-brand-black mb-6">Erstversorgung & Sicherung</h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-6">Jeder Tag bringt neue Herausforderungen. Wenn das Telefon klingelt, zählt oft jede Minute. Wir rücken aus, um verletzte Wildtiere – vom Rehkitz bis zum Igel – zu sichern und sie zur ärztlichen Erstversorgung zu bringen.</p>
            <p className="text-lg text-brand-gray leading-relaxed mb-8">Da Wildtiere in der Regel schnell in starken Stress geraten, gehen wir besonders behutsam vor und arbeiten eng mit erfahrenen und spezialisierten Tierärzten zusammen.</p>
            <Link to="/kontakt">
              <button className="flex items-center text-brand-primary font-medium group text-sm hover:text-brand-black transition-colors cursor-pointer">
                Einen Notfall melden
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
         </div>
         <div className="rounded-3xl overflow-hidden shadow-sm aspect-[4/3] order-1 md:order-2">
            <img src={IMAGES.mission1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Erstversorgung" />
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
         <div className="rounded-3xl overflow-hidden shadow-sm aspect-[4/3]">
            <img src={IMAGES.new1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Streunerhilfe" />
         </div>
         <div>
            <h2 className="text-3xl font-display text-brand-black mb-6">Streunerhilfe & Kastration</h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-6">Ein großes Problem, das leider noch immer oft übersehen wird: die unkontrollierte Vermehrung wildlebender Katzen. In teils aufwändigen Fangaktionen sichern wir verwilderte Tiere.</p>
            <p className="text-lg text-brand-gray leading-relaxed mb-6">Eine Kastration, medizinische Versorgung und anschließende Betreuung durch Pflegestellen ist unser absoluter Fokusbereich in der Katzenhilfe, um langfristiges Leid zu verhindern.</p>
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 border-t border-gray-100 pt-16">
         <div className="p-8">
            <PackageOpen className="w-10 h-10 text-brand-primary mb-6" strokeWidth={1.5} />
            <h4 className="font-display text-2xl text-brand-black mb-4">Sach- & Materialausgabe</h4>
            <p className="text-brand-gray text-sm leading-relaxed">Wir sammeln Futter und Zubehör von Spendern und verteilen es bedarfsgerecht und kostenlos an Pflegestellen, die die Last nicht alleine tragen können.</p>
         </div>
         <div className="p-8">
            <HeartHandshake className="w-10 h-10 text-brand-primary mb-6" strokeWidth={1.5} />
            <h4 className="font-display text-2xl text-brand-black mb-4">Medizinische Kosten</h4>
            <p className="text-brand-gray text-sm leading-relaxed">Wo finanzielle Spenden eingehen, nutzen wir jeden Euro zielgerichtet, um Tierarztrechnungen für Notfälle zu bezahlen.</p>
         </div>
         <div className="p-8">
            <Leaf className="w-10 h-10 text-brand-primary mb-6" strokeWidth={1.5} />
            <h4 className="font-display text-2xl text-brand-black mb-4">Auswilderung</h4>
            <p className="text-brand-gray text-sm leading-relaxed">Sobald Tiere wieder fit sind, suchen wir nach geeigneten Gebieten und betreuen eine schonende Auswilderung zurück in die Natur.</p>
         </div>
      </div>
    </div>
  );
}

function HappyEndsPage() {
  return (
    <div className="pt-40 pb-32 px-8 max-w-7xl mx-auto min-h-[70vh]">
      <div className="text-center mb-24 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display text-brand-black mb-6">Happy Ends.</h1>
        <p className="text-xl text-brand-gray leading-relaxed">
          Das ist der Grund, warum wir jeden Tag weitermachen. Die kleinen und großen Erfolge, wenn ein Tierleid beendet werden kann.
        </p>
      </div>
      
      {/* Featured Story */}
      <div className="bg-brand-primary rounded-3xl overflow-hidden shadow-xl mb-24 flex flex-col md:flex-row text-white w-full">
         <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <div className="text-sm uppercase tracking-widest text-brand-secondary font-body mb-4">
              Besondere Geschichte
            </div>
            <h2 className="text-4xl font-display mb-6">Wunder geschehen.</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">Als dieser kleine Schützling völlig entkräftet und verletzt gefunden wurde, stand es schlecht um ihn. Durch unsere direkte Kooperation mit der Wildtier-Pflegestelle vor Ort konnten wir eine Intensivbetreuung sichern. Tag und Nacht wurde gepäppelt, spezielles Futter organisiert und tierärztliche Betreuung finanziert.</p>
            <p className="text-lg text-white/90 leading-relaxed">Heute ist er vollständig genesen und bereits in den Auswilderungsprozess integriert. Ein Beweis dafür, dass sich jeder Einsatz lohnt.</p>
         </div>
         <div className="md:w-1/2 aspect-square md:aspect-auto h-full min-h-[400px] relative">
            <img src={IMAGES.mission3} className="absolute inset-0 w-full h-full object-cover" alt="Featured Happy End" />
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-md transition-shadow">
           <div className="h-64 overflow-hidden relative">
             <img src={IMAGES.new1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Happy End 1" />
           </div>
           <div className="p-8">
              <h3 className="text-2xl font-display text-brand-black mb-3">Die scheue Fundkatze</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Über Wochen wurde sie angefüttert, bis wir sie sichern konnten. Nach Quarantäne, Tierarztcheck und liebevoller Sozialisation schnurrt sie heute auf dem Sofa ihrer neuen Familie.</p>
           </div>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-md transition-shadow">
           <div className="h-64 overflow-hidden relative">
             <img src={IMAGES.qrBg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Happy End 2" />
           </div>
           <div className="p-8">
              <h3 className="text-2xl font-display text-brand-black mb-3">Aufpäppeln in Bestzeit</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Dank sofortiger Bereitstellung von Spezialmilch konnte die ehrenamtliche Pflegestelle direkt mit der Handaufzucht beginnen. Ohne Verzögerung, ohne Bürokratie.</p>
           </div>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-md transition-shadow">
           <div className="h-64 overflow-hidden relative">
             <img src={IMAGES.happy5} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Happy End 3" />
           </div>
           <div className="p-8">
              <h3 className="text-2xl font-display text-brand-black mb-3">Zweite Chance gesichert</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Bei Wildunfällen ist schnelles Handeln entscheidend. Durch unsere gesponsorten Transportboxen und den Notgroschen beim Tierarzt konnten wir auch in diesem Fall retten.</p>
           </div>
        </div>
      </div>
    </div>
  );
}

function PartnerPage() {
  return (
    <div className="pt-40 pb-32 px-8 max-w-7xl mx-auto min-h-[70vh]">
      <h1 className="text-5xl md:text-7xl font-display text-brand-black mb-16 text-center">Unsere Partner & Unterstützer</h1>
      
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24 max-w-5xl mx-auto">
         <div className="rounded-3xl overflow-hidden shadow-sm aspect-[4/3]">
            <img src={IMAGES.new2} className="w-full h-full object-cover" alt="Unsere Partner" />
         </div>
         <div>
            <HeartHandshake className="w-12 h-12 text-brand-primary mb-6" strokeWidth={1.5} />
            <h2 className="text-3xl font-display text-brand-black mb-6">Gemeinsam stark für Tiere</h2>
            <p className="text-xl text-brand-gray leading-relaxed mb-6">Wir glauben daran, dass echte Hilfe nur im Netzwerk funktioniert. Ohne die Unterstützung lokaler Praxen, engagierter Unternehmen und privater Spender könnten wir unsere Arbeit nicht leisten.</p>
            <p className="text-lg text-brand-gray leading-relaxed">Jede Partnerschaft hilft uns, Futterkosten zu decken, tierärztliche Behandlungen zu finanzieren und den Tieren eine zweite Chance zu geben.</p>
         </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80 max-w-5xl mx-auto text-brand-black">
         <div className="p-10 border border-gray-100 bg-gray-50 rounded-3xl flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <span className="font-display text-2xl mb-2">Tierarztpraxis<br/>Nord</span>
            <span className="text-sm font-body text-brand-gray">Medizinische Betreuung</span>
         </div>
         <div className="p-10 border border-gray-100 bg-gray-50 rounded-3xl flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <span className="font-display text-2xl mb-2">Lokales<br/>Futterhaus</span>
            <span className="text-sm font-body text-brand-gray">Regelmäßige Futterspenden</span>
         </div>
         <div className="p-10 border border-gray-100 bg-gray-50 rounded-3xl flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <span className="font-display text-2xl mb-2">Tierfreunde<br/>e.V.</span>
            <span className="text-sm font-body text-brand-gray">Vermittlungspartner</span>
         </div>
         <div className="p-10 border border-gray-100 bg-gray-50 rounded-3xl flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <span className="font-display text-2xl mb-2">Viele Private<br/>Sponsoren</span>
            <span className="text-sm font-body text-brand-gray">Die stille Kraft</span>
         </div>
      </div>
    </div>
  );
}

function KontaktPage() {
  return (
    <div className="pt-40 pb-32 px-8 max-w-7xl mx-auto min-h-[70vh]">
      <h1 className="text-5xl md:text-7xl font-display text-brand-black mb-12 text-center">Kontakt aufnehmen.</h1>
      <p className="text-xl text-brand-gray text-center max-w-2xl mx-auto mb-16 leading-relaxed">
        Haben Sie einen Notfall, möchten Sie Futter spenden oder sich ehrenamtlich engagieren? Wir sind für Sie da. Am schnellsten erreichen Sie uns via WhatsApp.
      </p>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
         {/* Kontakt Info & WhatsApp */}
         <div className="bg-brand-primary rounded-3xl p-10 text-white shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
               <MessageCircle className="w-12 h-12 mb-6" strokeWidth={1.5} />
               <h3 className="text-3xl font-display mb-6">Direkter Draht</h3>
               <p className="text-white/80 leading-relaxed mb-8">Da wir oft in Einsätzen sind oder Tiere versorgen, ist eine kurze Nachricht per WhatsApp der effektivste Weg. Senden Sie uns gerne auch direkt Fotos (z.B. von Fundtieren).</p>
               
               <div className="space-y-6">
                 <div className="flex items-center space-x-4">
                   <Phone className="w-6 h-6 text-brand-secondary" />
                   <span className="text-lg">+49 172 7344236</span>
                 </div>
                 <div className="flex items-center space-x-4">
                   <Mail className="w-6 h-6 text-brand-secondary" />
                   <span className="text-lg">info@wildtier-hilfe.example.com</span>
                 </div>
                 <div className="flex items-center space-x-4">
                   <MapPin className="w-6 h-6 text-brand-secondary" />
                   <span className="text-lg">Musterweg 12, 12345 Musterstadt</span>
                 </div>
               </div>
            </div>
            
            <a href="https://wa.me/491727344236" target="_blank" rel="noopener noreferrer" className="mt-12 w-full flex items-center justify-center space-x-2 text-brand-primary bg-white hover:bg-gray-100 transition-colors rounded-full px-6 py-4 cursor-pointer shadow-sm relative z-10 font-bold group">
               <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
               <span>WhatsApp Nachricht senden</span>
            </a>
            
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <MessageCircle className="w-64 h-64 translate-x-12 translate-y-12" />
            </div>
         </div>

         {/* Formular */}
         <div className="bg-brand-white border border-gray-100 rounded-3xl p-10 shadow-sm">
            <h3 className="text-2xl font-display text-brand-black mb-8">Nachricht schreiben</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Ihre Nachricht wurde gesendet. Vielen Dank!"); (e.target as HTMLFormElement).reset(); }}>
               <div>
                  <label className="block text-sm font-medium text-brand-gray mb-2">Ihr Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors" placeholder="Max Mustermann" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-brand-gray mb-2">E-Mail Adresse</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors" placeholder="max@beispiel.de" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-brand-gray mb-2">Nachricht</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors resize-none" placeholder="Wie können wir helfen?"></textarea>
               </div>
               <button type="submit" className="w-full bg-brand-black text-white hover:bg-gray-800 transition-colors rounded-xl px-6 py-4 font-medium flex items-center justify-center space-x-2">
                 <span>Absenden</span>
                 <Send className="w-4 h-4 ml-2" />
               </button>
               <p className="text-xs text-gray-400 text-center mt-4">Ihre Daten werden sicher und vertraulich behandelt.</p>
            </form>
         </div>
      </div>
    </div>
  );
}

function MissionPage() {
  return (
    <div className="pt-40 pb-32 px-8 max-w-7xl mx-auto min-h-[70vh]">
      <h1 className="text-5xl md:text-7xl font-display text-brand-black mb-12 text-center text-balance">Warum das Projekt ins Leben gerufen wurde.</h1>
      
      <div className="max-w-4xl mx-auto mb-20 text-brand-gray text-lg leading-relaxed space-y-6">
        <p>
          <strong>Sehr geehrte Damen und Herren, liebe Tierfreunde in Nord-Bayern und darüber hinaus,</strong>
        </p>
        <p>
          für den Neu-Aufbau und Neu-Gründung unseres neuen PRIVAT PROJEKTS / PRIVAT INITIATIVE mit dem Namen: <br/>
          <strong>WILDTIERHILFE NORD-BAYERN mit Herz & Verstand</strong><br/>
          (Hilfe – schnell – unkompliziert – unbürokratisch – direkt)
        </p>
        <p>
          Wir haben zuvor bereits zweimal erfolgreich Tiertafeln aufgebaut. Ab Mai 2024 zunächst die Tiertafel Bamberg Stadt und Land(kreis) und ab Oktober 2024 die Futter-Arche Bamberg & Umgebung – federführend und anfangs praktisch alleine. Später kamen Helfer dazu, die uns unterstützten.
        </p>
        <p>
          Leider haben sich unsere Wege dann wegen unüberbrückbarer Differenzen und Vorstellungen darüber, wie es in Zukunft weiterlaufen soll, getrennt. Wir (Mirco und Carmen) haben das vorherige Projekt im April 2026 freiwillig verlassen. Wir möchten unsere Lebenszeit, die wir investieren, sinnvoll verwenden und wirklich helfen und unterstützen. Deshalb auch unser neuer Slogan: <br/>
          <em className="text-brand-primary">(HILFE - schnell – unkompliziert – unbürokratisch – direkt)</em>
        </p>
        <p>
          Wir werden jetzt also ein <strong className="text-brand-black">DRITTES MAL</strong> beginnen, ein Projekt aufzubauen. Alle guten Dinge sind drei! Diesmal ist es unser EIGENES PRIVAT-PROJEKT! Kein Verein! Voll und ausschließlich unter unserer eigenen Kontrolle. Deshalb wird es keine Probleme mehr geben. Es wird alles schnell und effektiv gemacht, so wie es sein soll und auch sein muss. Kein bürokratischer Unsinn und irgendwelche Vorschriften und Vorgaben, die das Helfen verhindern!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
         <div>
            <Leaf className="w-12 h-12 text-brand-primary mb-6" strokeWidth={1.5} />
            <h2 className="text-3xl font-display text-brand-black mb-6">Zukunfts-Ziele & Pläne</h2>
            <p className="text-lg text-brand-gray leading-relaxed mb-6">In Zukunft, so ist es angedacht, werden wir das ganze Privat-Projekt evtl. in eine gemeinnützige Organisation überführen. Dann wird es auch möglich sein, Spenden-Bescheinigungen/-Quittungen auszustellen, aber vorerst bleibt das Projekt ein PRIVAT-PROJEKT bis auf Weiteres! Sollte sich daran etwas ändern, werden wir es auf der Homepage bekannt geben.</p>
            <p className="text-lg text-brand-gray leading-relaxed mb-6">Da wir wieder bei Null anfangen, ist es natürlich schwer, aber wir sind bemüht, es mit viel Elan und Einsatz aufzuziehen und sind engagiert wie immer!</p>
            <p className="text-lg text-brand-gray leading-relaxed mb-4">Da dies eine Privat-Initiative ist, sind wir auf Spenden (Sach- und Geld-Spenden) angewiesen. Wir können <strong className="text-brand-black">KEINE SPENDEN-BESCHEINIGUNGEN/-QUITTUNGEN</strong> ausstellen. Wir werden versuchen, durch Aufrufe und evtl. Crowdfunding-Kampagnen Geld reinzubekommen, um den Wildtier-Pflegestellen, Tierherbergen, Gnadenhöfen und Streuner-Stellen dann Sachen, die benötigt werden, zu kaufen.</p>
         </div>
         <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square">
               <img src={IMAGES.mission1} alt="Fundtier" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square translate-y-8">
               <img src={IMAGES.qrBg} alt="Pflege" className="w-full h-full object-cover" />
            </div>
         </div>
      </div>

      <div className="bg-brand-primary rounded-3xl p-12 md:p-20 text-white shadow-xl max-w-6xl mx-auto relative overflow-hidden">
         <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-display mb-6">Selbstgemacht & Mit Herzblut</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">Neben finanzieller Unterstützung und gekauften Sachspenden haben wir auch wunderbare Helfer, die Dinge selbst herstellen. Dazu gehören Igel-Höhlen, Eichhörnchen-Kobel, gehäkelte Nester für Vögel oder auch spezielle Trauma-Rollen für verletzte Tiere.</p>
            <p className="text-xl text-white/90 leading-relaxed mb-8">Wir würden uns sehr freuen, wenn Sie unser neues Privat-Projekt unterstützen würden. Sprechen Sie uns dazu gerne per Email an!</p>
            <div className="flex space-x-4">
               <Users className="w-8 h-8 text-brand-secondary" />
               <HeartHandshake className="w-8 h-8 text-brand-secondary" />
            </div>
         </div>
         <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden md:block">
            <img src={IMAGES.mission2} alt="Hintergrund" className="w-full h-full object-cover" />
         </div>
      </div>
    </div>
  );
}

function UnterstuetzenPage() {
  const [ibanCopied, setIbanCopied] = useState(false);
  const [paypalCopied, setPaypalCopied] = useState(false);

  const handleCopyIban = () => {
    navigator.clipboard.writeText("DE________________________________");
    setIbanCopied(true);
    setTimeout(() => setIbanCopied(false), 2000);
  };

  const handleCopyPaypal = () => {
    navigator.clipboard.writeText("Wildtierhilfe-NordBayern-mit-Herz@Web.de");
    setPaypalCopied(true);
    setTimeout(() => setPaypalCopied(false), 2000);
  };

  return (
    <div className="pt-40 pb-32 px-8 max-w-7xl mx-auto min-h-[70vh]">
      <h1 className="text-5xl md:text-7xl font-display text-brand-black mb-12 text-center">Ihre Unterstützung zählt.</h1>
      <p className="text-xl text-brand-gray text-center max-w-2xl mx-auto mb-16 leading-relaxed">
        Jeder Beitrag, ob finanziell oder als Sachspende, fließt zu 100% in die direkte Hilfe für Wildtiere und Streuner in Not.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
         {/* Bank Details */}
         <div className="bg-brand-primary rounded-3xl p-10 text-white shadow-md flex flex-col justify-center relative overflow-hidden">
            <h3 className="text-3xl font-display text-white mb-8 relative z-10">Banküberweisung</h3>
            <div className="bg-brand-secondary/30 backdrop-blur-md rounded-2xl p-8 mb-6 relative z-10">
              <div className="text-white/70 text-sm uppercase tracking-wider mb-3">Bank</div>
              <div className="text-lg mb-6">C 24 Bank GmbH – Direkt-Bank – Frankfurt / Main</div>
              <div className="text-white/70 text-sm uppercase tracking-wider mb-2">Empfänger</div>
              <div className="text-lg mb-6">
                Mirco Peltzer<br/>
                <span className="text-base text-white/80">(Privat Projekt - Wildtierhilfe Nord-Bayern mit Herz & Verstand)</span>
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wider mb-2">IBAN</div>
              <div className="font-mono text-xl sm:text-2xl mb-4 break-all tracking-widest">DE________________________________</div>
              <div className="text-white/70 text-sm uppercase tracking-wider mb-2">BIC</div>
              <div className="font-mono text-xl sm:text-2xl mb-6 break-all tracking-widest">DEFFDEFF</div>
              <div className="text-white/70 text-sm uppercase tracking-wider mb-2">Verwendungszweck</div>
              <div className="text-lg mb-8">Spende</div>
              
              <button 
                onClick={handleCopyIban}
                className="flex items-center justify-center w-full space-x-2 text-base font-medium bg-white text-brand-primary hover:bg-gray-100 transition-colors rounded-full px-6 py-4 cursor-pointer shadow-sm"
              >
                {ibanCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                <span>{ibanCopied ? 'IBAN kopiert!' : 'IBAN kopieren'}</span>
              </button>
            </div>
         </div>

          {/* PayPal Details */}
         <div className="bg-brand-white border border-gray-100 rounded-3xl p-10 text-brand-black shadow-md flex flex-col justify-center group relative overflow-hidden">
            <h3 className="text-3xl font-display text-brand-black mb-8 relative z-10">PayPal</h3>
            <div className="bg-gray-50 rounded-2xl p-8 mb-6 flex-1 flex flex-col items-center justify-center text-center relative z-10 border border-transparent group-hover:border-blue-100 transition-colors">
              <div className="text-brand-gray text-sm uppercase tracking-wider mb-2 text-left w-full">Empfänger E-Mail</div>
              <div className="text-lg mb-6 text-brand-black break-all font-medium">Wildtierhilfe-NordBayern-mit-Herz@Web.de</div>
              <div className="text-brand-gray text-sm uppercase tracking-wider mb-2 text-left w-full">Verwendungszweck</div>
              <div className="text-lg mb-8 text-left w-full">Spende</div>

              <div className="w-full flex flex-col gap-4">
                <button 
                  onClick={handleCopyPaypal}
                  className="w-full active:scale-95 bg-white border border-[#0070BA] text-[#0070BA] font-medium rounded-full py-4 px-6 hover:bg-blue-50 transition-all duration-300 shadow-sm cursor-pointer text-lg flex items-center justify-center gap-2"
                >
                  {paypalCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  <span>{paypalCopied ? 'E-Mail kopiert!' : 'E-Mail kopieren'}</span>
                </button>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Wildtierhilfe-NordBayern-mit-Herz@Web.de&item_name=Spende" target="_blank" rel="noopener noreferrer" className="w-full active:scale-95 bg-[#0070BA] text-white font-medium rounded-full py-4 px-6 hover:bg-[#003087] transition-all duration-300 shadow-sm cursor-pointer text-lg flex items-center justify-center gap-2">
                  <span>Spenden via PayPal</span>
                </a>
              </div>
            </div>
         </div>
      </div>
      
      {/* Sachspenden */}
      <div className="max-w-5xl mx-auto mt-8 bg-brand-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow delay-100">
         <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-full flex-shrink-0">
               <PackageOpen className="w-10 h-10 text-brand-primary" strokeWidth={1.5} />
            </div>
            <div>
               <h3 className="text-2xl font-display text-brand-black mb-3">Sachspenden & Futter</h3>
               <p className="text-brand-gray leading-relaxed mb-4">Wir benötigen dringend Aufzuchtmilch, Nassfutter, Handtücher, Wärmflaschen und Küchenrollen. Bitte kontaktieren Sie uns vorab, um den aktuellen Bedarf und Abgabeorte abzusprechen.</p>
               <Link to="/kontakt" className="flex items-center text-brand-primary font-medium group text-sm hover:text-brand-black transition-colors cursor-pointer">
                 Kontakt für Sachabgabe
                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
         </div>
      </div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-brand-white">
      <ScrollToTop />
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
        <Link to="/" className="text-3xl tracking-tight font-display text-brand-primary">
          Wildtier-Hilfe<sup className="text-[0.4em] top-[-0.7em] relative">®</sup>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-brand-gray">
          <Link to="/was-wir-tun" className="text-brand-black hover:text-brand-secondary transition-colors duration-300">Was wir tun</Link>
          <Link to="/unterstuetzen" className="hover:text-brand-secondary transition-colors duration-300">Unterstützen</Link>
          <Link to="/mission" className="hover:text-brand-secondary transition-colors duration-300">Mission</Link>
          <Link to="/happy-ends" className="hover:text-brand-secondary transition-colors duration-300">Happy Ends</Link>
          <Link to="/partner" className="hover:text-brand-secondary transition-colors duration-300">Partner</Link>
          <Link to="/kontakt" className="hover:text-brand-secondary transition-colors duration-300">Kontakt</Link>
        </div>
        <Link to="/unterstuetzen">
          <button className="rounded-full px-6 py-2.5 text-sm font-medium bg-brand-primary text-brand-white hover:scale-103 transition-transform duration-300 cursor-pointer">
            Jetzt helfen
          </button>
        </Link>
      </nav>

      <div className="flex-1 shadow-sm">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-brand-white border-t border-gray-100 py-16 text-center">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
          <div className="text-2xl font-display text-brand-primary mb-8">
            Wildtier-Hilfe<sup className="text-[0.4em] top-[-0.7em] relative">®</sup>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-gray font-body mb-12">
            <Link to="/impressum" className="hover:text-brand-black transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-brand-black transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-brand-black transition-colors">AGB</Link>
          </div>

          <a 
            href="https://vamela.info" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 mt-4"
          >
            <span className="text-xs text-gray-400 uppercase tracking-widest">Made by</span>
            <span className="text-sm font-medium text-brand-black group-hover:text-brand-secondary transition-colors">Vamela</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("DE________________________________");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="relative min-h-[100vh] w-full flex items-center justify-center">
        {/* Background Video Layer */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
            muted
            playsInline
            autoPlay
            loop
            preload="auto"
            controls={false}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-white/70 via-transparent to-brand-white pointer-events-none"></div>
          {/* Whitish Overlay for Desktop */}
          <div className="absolute inset-0 hidden md:block bg-brand-white/40 pointer-events-none"></div>
        </div>

        {/* Hero Section */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-24">
          <img 
            src="https://s1.directupload.eu/images/260517/68grmn65.png" 
            alt="Logo Wildtierhilfe Nord-Bayern mit Herz & Verstand" 
            className="w-full max-w-[501px] mb-12 object-contain animate-fade-rise drop-shadow-md"
          />
          
          <h1 className="sr-only">Wildtierhilfe Nord-Bayern mit Herz & Verstand - Tierrettung und Pflege in Franken</h1>
          

          <div 
            className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal font-display text-brand-black animate-fade-rise opacity-0" 
            style={{ lineHeight: 0.95, letterSpacing: '-2.46px', animationDelay: '250ms' }}
          >
            <em className="text-brand-primary italic">Gemeinsam</em> schenken wir <em className="text-brand-primary italic">Hoffnung.</em>
          </div>
          
          <p className="text-base sm:text-lg max-w-2xl mt-8 mb-4 leading-relaxed text-brand-gray animate-fade-rise-delay opacity-0" style={{ animationDelay: '400ms' }}>
            Wir unterstützen Wildtier-Pflegestellen, Gnadenhöfe, Tierherbergen und Streuner-Stellen mit Sachspenden, Futter und mehr.
          </p>
          <div className="text-lg sm:text-xl font-medium text-brand-black animate-fade-rise-delay opacity-0">
            HILFE - schnell – unkompliziert – unbürokratisch – direkt
          </div>

          <Link to="/unterstuetzen">
            <button className="rounded-full px-14 py-5 text-base mt-12 bg-brand-primary text-brand-white hover:scale-103 hover:shadow-[0_4px_20px_rgba(42,77,62,0.3)] transition-all duration-300 animate-fade-rise-delay-2 opacity-0 cursor-pointer">
              Wie Sie uns unterstützen können
            </button>
          </Link>
        </main>
      </div>

      {/* Mission & Story Section */}
      <section className="bg-brand-white py-32 md:py-48 relative">
        <div className="max-w-7xl mx-auto px-8 relative">
          {/* Connecting Line (desktop only) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 z-0"
          />

          {/* Block 1: Was wir tun */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-32 md:mb-48 relative z-10">
            <motion.div 
              className="md:w-1/2 text-left bg-brand-white md:pr-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="text-sm uppercase tracking-widest text-brand-secondary font-body mb-4">
                Unsere Mission
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-display text-brand-black leading-tight mb-8">
                Direkte Hilfe, wo sie gebraucht wird.
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-brand-gray font-body max-w-xl mb-4">
                Sehr geehrte Wildtier-Freunde, liebe Mitbürger,<br /><br />
                ein ganz <span className="font-medium text-brand-black">HERZLICHES WILLKOMMEN</span> auf unserer ersten Homepage der PRIVAT-INITIATIVE: <br />
                <span className="text-brand-primary font-medium">WILDTIER HILFE – NORD-BAYERN mit HERZ und VERSTAND</span>
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-brand-gray font-body max-w-xl">
                Schön, dass Du zu uns gefunden hast! Unser Projekt ist aus dem Wunsch heraus entstanden, dort zu helfen und hinzusehen, wo Hilfe gebraucht wird. Wir helfen mit Engagement, Herzblut und Liebe zu den Tieren.
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative group">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  style={{ backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260514_062001_a9d99f46-e739-4321-97cb-e8ea4bea5010.png&w=1280&q=85')" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Block 2: Unser Ursprung */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-32 md:mb-48 relative z-10">
            <motion.div 
              className="md:w-1/2 text-left bg-brand-white md:pl-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="text-sm uppercase tracking-widest text-brand-secondary font-body mb-4">
                Der Ursprung
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-display text-brand-black leading-tight mb-8">
                Warum wir gestartet sind.
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-brand-gray font-body max-w-xl mb-4">
                Wir haben uns zum Ziel gesetzt, Wildtier-Pflegestellen, Wildtier-Hilfe-Stellen, Gnadenhöfe, Tierherbergen und Streuner Stellen (z. B. Katzen) zu unterstützen.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-brand-gray font-body max-w-xl">
                Da diese Stellen die Arbeit für verletzte Tiere und Wildtiere oft aus privater Tasche bezahlen und kaum Unterstützung bekommen, ist dies eine absolute Lücke, wo dringend gehandelt werden muss. Das wollen wir mit unserer Privat-Initiative nun tun! Die Devise heißt: <span className="text-brand-primary font-medium">HANDELN - nicht nur reden!</span>
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative group">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  style={{ backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260514_061911_a7e0e6ed-d2ca-4656-811c-b91cbc1adf78.png&w=1280&q=85')" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Block 3: Zukunfts-Ziele */}
          <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
            <motion.div 
              className="md:w-1/2 text-left bg-brand-white md:pr-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="text-sm uppercase tracking-widest text-brand-secondary font-body mb-4">
                In unseren Worten
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-display text-brand-black leading-tight mb-8">
                Jedes Leben zählt!
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-brand-gray font-body max-w-xl mb-4">
                "Man erkennt den Wert einer Gesellschaft daran, wie sie mit den Schwächsten ihrer Glieder verfährt." <em className="text-sm">(Gustav Heinemann)</em>
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-brand-gray font-body max-w-xl">
                Egal ob groß oder klein, für jedes Tier macht es einen Unterschied! Auch Tiere haben Gefühle – Schmerz, Angst, Trauer. Wir wollen diese großartige Arbeit der Pflegestellen mit Futter, Spielzeug, Zubehör und selbst gemachten Sachen aktiv unterstützen. <span className="text-brand-primary font-medium">100 Prozent privat.</span>
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative group">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  style={{ backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260515_071613_392a05be-c67f-467e-bee5-ee1c9b7b7e4f.png&w=1280&q=85')" }}
                />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Support & Action Section */}
      <section className="bg-gradient-to-b from-brand-white to-gray-50 py-32 md:py-48 relative">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-sm uppercase tracking-widest text-brand-secondary font-body mb-4">
              Ihre Hilfe
            </div>
            <h2 className="text-5xl md:text-6xl font-normal font-display text-brand-black">
              Wie Sie uns unterstützen können.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            {/* Card 1: Sachspenden */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 bg-brand-white rounded-3xl p-10 shadow-sm hover:shadow-md border border-transparent hover:border-brand-secondary transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <PackageOpen className="w-10 h-10 text-brand-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-display text-brand-black mb-4">Sachspenden & Futter</h3>
                <p className="text-gray-500 font-body max-w-lg mb-8 leading-relaxed">
                  Wir benötigen dringend Futter, Spielzeug, Decken und Zubehör für Wildtiere und Streunerkatzen. Jeder Gegenstand hilft unseren Pflegestellen direkt bei der täglichen Arbeit.
                </p>
              </div>
              <div>
                <Link to="/kontakt">
                  <button className="flex items-center text-brand-primary font-medium group text-sm hover:text-brand-black transition-colors cursor-pointer">
                    Kontakt für Sachabgabe
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Finanzielle Hilfe */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-1 md:row-span-2 bg-brand-primary rounded-3xl p-10 text-white shadow-sm flex flex-col"
            >
              <h3 className="text-3xl font-display text-white mb-6">Finanzielle Unterstützung</h3>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6">
                <div className="text-white/70 text-xs uppercase tracking-wider mb-2">Bank</div>
                <div className="text-sm mb-4">C 24 Bank GmbH</div>
                <div className="text-white/70 text-xs uppercase tracking-wider mb-2">IBAN</div>
                <div className="font-mono text-lg mb-4 break-all">DE________________________________</div>
                <button 
                  onClick={handleCopy}
                  className="flex items-center space-x-2 text-sm bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-2 relative group cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Kopiert!' : 'IBAN kopieren'}</span>
                </button>
              </div>

              <div className="mb-8">
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Wildtierhilfe-NordBayern-mit-Herz@Web.de&item_name=Spende" target="_blank" rel="noopener noreferrer" className="w-full active:scale-95 bg-white text-black font-medium rounded-full py-3.5 px-6 hover:bg-gray-100 transition-all duration-300 cursor-pointer flex items-center justify-center">
                  Spenden via PayPal
                </a>
              </div>

              <div className="mt-auto">
                <div className="text-white/70 text-sm mb-4">Schnell spenden</div>
                <div className="flex justify-between items-center gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-center flex-1 aspect-square">
                    <QrCode className="w-8 h-8 text-white/50" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-center flex-1 aspect-square relative overflow-hidden">
                    {/* Background image for QR code placeholder using 4th image purely for decoration */}
                    <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260515_071642_62667796-0bc7-4ed0-8ae5-fbd0a07414f3.png&w=1280&q=85')" }} />
                    <QrCode className="w-8 h-8 text-white/50 relative z-10" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Downloads */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 bg-brand-white rounded-3xl p-10 shadow-sm hover:shadow-md border border-transparent hover:border-brand-secondary transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Download className="w-10 h-10 text-brand-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-display text-brand-black mb-4">Material & Downloads</h3>
                <p className="text-gray-500 font-body max-w-lg mb-8 leading-relaxed">
                  Helfen Sie uns, bekannter zu werden. Laden Sie unsere Flyer und Visitenkarten herunter und verteilen Sie diese an tierliebe Menschen.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="active:scale-95 border border-brand-black text-brand-black rounded-full px-6 py-2.5 text-sm hover:bg-brand-black hover:text-white transition-all duration-300 cursor-pointer">
                  Flyer herunterladen (PDF)
                </button>
                <button className="active:scale-95 border border-gray-200 text-gray-600 rounded-full px-6 py-2.5 text-sm hover:border-brand-black hover:text-brand-black transition-all duration-300 cursor-pointer">
                  Visitenkarte (PDF)
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/was-wir-tun" element={<WasWirTunPage />} />
          <Route path="/unterstuetzen" element={<UnterstuetzenPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/happy-ends" element={<HappyEndsPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/impressum" element={
            <SubPage title="Impressum">
              <h2 className="text-2xl font-display text-brand-black mb-4 mt-8">Privat-Initiative / Privat Projekt</h2>
              <p className="mb-6 font-bold text-lg">Wildtier-Hilfe Nord-Bayern mit Herz & Verstand</p>
              
              <p className="mb-6 leading-relaxed">
                Carmen Körner<br/>
                Schlesienstrasse 125<br/>
                OT; Lichteneiche<br/>
                96117 Memmelsdorf
              </p>
              
              <h2 className="text-2xl font-display text-brand-black mb-4 mt-8">Kontakt</h2>
              <p className="mb-6 leading-relaxed">
                Handy: (0162) 408 27 03 (Vodafone / Carmen Körner)<br/>
                E-Mail: <a href="mailto:Wildtierhilfe-NordBayern-mit-Herz@Web.de" className="text-brand-primary hover:underline">Wildtierhilfe-NordBayern-mit-Herz@Web.de</a><br/>
                Homepage: <a href="https://www.wildtierhilfe-NordBayern-mit-Herz.de" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">www.wildtierhilfe-NordBayern-mit-Herz.de</a>
              </p>
            </SubPage>
          } />
          <Route path="/datenschutz" element={
            <SubPage title="Datenschutz">
              <h2 className="text-2xl font-display text-brand-black mb-4 mt-8">1. Datenschutz auf einen Blick</h2>
              <p className="mb-6">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
              <h2 className="text-2xl font-display text-brand-black mb-4 mt-8">2. Hosting</h2>
              <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter.</p>
            </SubPage>
          } />
          <Route path="/agb" element={
            <SubPage title="AGB">
              <h2 className="text-2xl font-display text-brand-black mb-4 mt-8">1. Geltungsbereich</h2>
              <p className="mb-6">Für alle Sach- und Geldspenden über unsere Webseite gelten diese AGB.</p>
              <h2 className="text-2xl font-display text-brand-black mb-4 mt-8">2. Spenden und Zuwendungen</h2>
              <p className="mb-6">Alle Spenden werden ausschließlich für die genannten Zwecke verwendet. Eine Rückerstattung ist ausgeschlossen.</p>
            </SubPage>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
