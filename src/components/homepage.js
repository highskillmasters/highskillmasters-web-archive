import React from "react"

import Image from "../components/image"

const Homepage = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: `200px`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image></Image>
      </div>

      <p>
        High Skill Masters is a global community for highly skilled
        professionals in several countries that aimed to be connected worldwide.
      </p>
      <p>
        Are you someone with a high skill set or on the path to mastery? Let's
        get connected!
      </p>
      <p>Join our meetups and network with like-minded professionals.</p>
      <p>
        We gather business owners, entrepreneurs, infopreneurs, executives,
        educators, teachers, mentors, coaches, advisors, engineers, programmers,
        developers, designers, digital marketers, writers, authors, consultants,
        creators, technologists, makers, inventors, photographers,
        videographers, podcasters, influencers, scientists, researchers,
        speakers, organizers, closers, recruiters, travelers, nomads, investors,
        or your fancy professions.
      </p>

      <h3>Activities</h3>

      <ul>
        <li>Beginner: Casual networking with like-minded people</li>
        <li>Intermediate: Seminar in sharing and helping to solve problems</li>
        <li>Advanced: Workshop in creating something new together</li>
      </ul>
      <h3>Meetup Regions</h3>
      <ul>
        <li>
          Malaysia:{" "}
          <a href="https://meetup.com/highskillmasters-malaysia">
            https://meetup.com/highskillmasters-malaysia
          </a>
        </li>
        <li>
          Indonesia:{" "}
          <a href="https://meetup.com/highskillmasters-indonesia">
            https://meetup.com/highskillmasters-indonesia
          </a>
        </li>
        <li>
          Singapore:{" "}
          <a href="https://meetup.com/highskillmasters-singapore">
            https://meetup.com/highskillmasters-singapore
          </a>
        </li>
      </ul>
      <h3>Social Media</h3>
      <ul>
        <li>
          Facebook Page:{" "}
          <a href="https://facebook.com/highskillmasters">
            https://facebook.com/highskillmasters
          </a>
        </li>
        <li>
          Facebook Group:{" "}
          <a href="https://facebook.com/groups/highskillmasters">
            https://facebook.com/groups/highskillmasters
          </a>
        </li>
        <li>
          LinkedIn Group:{" "}
          <a href="https://linkedin.com/groups/10512255">
            https://linkedin.com/groups/10512255
          </a>
        </li>
      </ul>
      <p>LEARN. GROW. SUCCESS.</p>
    </div>
  )
}

export default Homepage
