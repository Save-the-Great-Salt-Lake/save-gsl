'use client'
import { useState } from 'react'

export default function ContactSection() {
  const [repName, setRepName] = useState('')
  const [repEmail, setRepEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] =
    useState(`I hope this message finds you well. I am writing to draw your attention to the critical and deteriorating state of the Great Salt Lake, a natural treasure that is under grave threat due to a combination of climate change and rapid population growth. The lake's current plight was vividly described in a recent article by NPR, shedding light on the dire environmental and economic repercussions we face should we fail to act promptly.

Carly Biedul, a biologist with the Great Salt Lake Institute, and her team are at the forefront of understanding the unfolding crisis. Their findings reveal a bleak scenario; the lake's unique ecosystem is on the brink of collapse. The disappearing brine flies, a crucial part of the food chain, are a glaring indicator of the troubles ahead. Moreover, the lake's receding shores are a stark reminder of the environmental and health hazards that loom, especially with the potential for toxic dust storms carrying neurotoxins and carcinogens into our communities.

The escalating air pollution in the Salt Lake Valley is a pressing concern. As the lake dries, the frequency and intensity of dust storms are predicted to increase, exacerbating existing health issues among residents, particularly those in vulnerable, working-class neighborhoods like Glendale. Studies have already correlated poor air quality to higher rates of asthma, cardiovascular disease, and even lower test scores among students.

On the economic front, the decline of the lake threatens various industries from brine shrimp fishing to mineral harvesting, alongside impacting our renowned ski resorts due to the loss of lake effect snow. The potential economic fallout is dizzying and necessitates immediate, robust action.

State lawmakers are beginning to respond to this crisis, with discussions around a significant spending package aimed at preserving the lake. It's heartening to see bipartisan efforts emerging to tackle this monumental challenge. Yet, the urgency of the situation calls for more comprehensive, decisive measures to ensure the long-term vitality of the Great Salt Lake and the surrounding ecosystems.

I implore you to champion robust policies and funding to restore and protect the Great Salt Lake. The proposed interventions, ranging from expanding turf-reduction programs, incentivizing farmers to divert less water, to more novel solutions like cloud seeding or even exploring pipelines for water replenishment from the Pacific Ocean, are indicative of the multifaceted approach needed to address this crisis.

The Great Salt Lake is more than a natural wonder; it's a vital part of Utah's environmental, economic, and cultural heritage. As our elected representative, your advocacy and action in safeguarding this invaluable asset are crucial. We have a collective responsibility to preserve the Great Salt Lake for the present and future generations.

Thank you for your time and consideration. I am hopeful that with your support, we can avert an ecological disaster and ensure a sustainable future for the Great Salt Lake and our community.`)

  const composeEmail = () => {
    const subject =
      'Urgent Call to Action: Protecting The Great Salt Lake from Ecological Disaster'
    const mailtoLink = `mailto:${repEmail.trim()}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Dear ${repName},\n\n` + message + `Warmest regards,\n\n${fullName}\n${address}\n${city}, ${state}, ${zip}\n${email}\n${phone}`)}`
    console.log('mailtoLink: ', mailtoLink)
    window.location.href = mailtoLink
  }

  return (
    <section id="three" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Contact the Right People</h2>
        <p>Send an email to each of your government representatives!</p>
        <section>
          <form id="email-form">
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Your Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  required
                  value={state}
                  onChange={e => setState(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  required
                  value={zip}
                  onChange={e => setZip(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div className='field findReps'>
                <br />
                <input type="button" value="Find my Reps!" onClick={() => window.open(`https://www.usa.gov/elected-officials-results?input-street=${address}&input-city=${city}&input-state=${state}&input-zip=${zip}#skip-to-h1`, '_blank')} />
                <br />
                <p>(It&lsquo;s suggested you contact your state House Representative and Senator)</p>
              </div>
              <div className="field half">
                <label htmlFor="name">Representative&lsquo;s Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={repName}
                  onChange={(e) => setRepName(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="rep-email">Representative&lsquo;s Email:</label>
                <input
                  type="email"
                  id="rep-email"
                  name="rep-email"
                  required
                  value={repEmail}
                  onChange={(e) => setRepEmail(e.target.value)}
                />
                <br />
              </div>
              <div className="field">
                <label htmlFor="message">Your Message:</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  rows={10}
                  cols={30}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <br />
              </div>
            </div>
            <input type="button" value="Compose Email" onClick={composeEmail} />
          </form>
        </section>
      </div>
    </section>
  )
}
