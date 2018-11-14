import React from 'react'
import * as Icons from 'react-feather';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/seanmcp'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mcpcodes'
  },
  {
    name: 'Linkedin',
    href: 'https://linkedin.com/in/seanmcp'
  }
]

const Bio = () => {
  const links = socialLinks.map(platform => {
    const Icon = Icons[platform.name]
    return (
      <li className="Bio__social-item" key={platform.name}>
        <Icon />
        <a className="Bio__social-link" href={platform.href}>{platform.name}</a>
      </li>
    )
  })
  return (
    <section className="Bio">
      <p>
        My name is <strong>Sean McPherson</strong>, and I am a software developer in Atlanta, GA. I write about web development, JavaScript, React, and occassionally some other things. (SDG)
      </p>
      <ul className="Bio__social-list">
        {links}
      </ul>
    </section>
  )
}

export default Bio
