import React from "react"
import styles from "../styles/Projekt.module.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import Image from "next/image"
import project1 from "../public/project1.jpg"
import project2 from "../public/project2.jpg"

function Projekt() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GrundgeSÄTZE | Über das Projekt</title>
        <meta
          name="description"
          content="Rechte verstehen, Zukunft gestalten. Dies ist das Motto unseres Projekts, das sich darauf konzentriert,
            das Verständnis für die grundlegenden Rechte im deutschen
            Grundgesetz bei Schülern und Jugendlichen zu fördern."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className={styles.Hero}>
        <div className={styles.content}>
          <Header />
          <h1 className={styles.title}>
            <span>Rechte</span> verstehen, <span>Zukunft</span> gestalten
          </h1>
          <p className={styles.text}>
            Im Rahmen des Demokratieprojektes GrundgeSÄTZE (GGS) haben über 500
            Schüler*innen deutschlandweit unsere Grundrechte in eigenen Worten
            formuliert. Auf dieser Website sind zum einen die Sätze zu sehen,
            die in einem Online-Voting der Jugendlichen die meisten Stimmen
            erhielten und von einer Jury aus Expert*innen geprüft wurden, und
            zum anderen alle Sätze, die bisher in dem Projekt entstanden sind.
            <br /> <br />
            Die Herausforderung: In unserer Verfassung stecken unglaublich viele
            wertvolle Aussagen für den Alltag, allerdings ist das auf den ersten
            Blick oft nicht einfach erkennbar. Das Grundgesetz ist ein
            komplizierter Gesetzestext, der in der Schule oft theoretisch
            besprochen wird, anstatt praktisch behandelt zu werden. Dadurch
            fehlt Schüler*innen der Zugang zu den konkreten Werten und Aussagen
            für unseren alltäglichen Umgang miteinander, die in den Grundrechten
            enthalten sind.
          </p>

          <div className={styles.imageWrapper}>
            <Image
              className={styles.image1}
              src={project1}
              alt="Präsentation"
            />
            <Image className={styles.image2} src={project2} alt="Klassenraum" />
          </div>
          <h2 className={styles.title2}>Die Entstehung</h2>
          <p className={styles.text}>
            Die Entstehung: Aus diesem Grund hat der Verein 10drei im Zeitraum
            2020 - 2022 das Projekt “GrundgeSÄTZE - einfach für alle” initiiert.
            Hierfür wurden die “klassischen” Grundrechte (Artikel 1 - 19) des
            Grundgesetzes sowie der Artikel 20a als Ausgangspunkt genommen und
            die zentralsten der darin enthaltenen Grundrechte aufbereitet. Bei
            der Entscheidung, welche Grundrechte aufgenommen werden, orientierte
            10drei sich vor allem am Kriterium der Lebensrelevanz für die
            Schüler*innen. Schüler*innen aller Schulformen und von der 7. bis
            zur 11. Klasse haben in acht verschiedenen Bundesländern jeweils
            drei dieser Grundrechte frei und mit ihren eigenen Worten
            formuliert. Anschließend wurden alle Sätze vom 10drei-Team gesammelt
            und in einem Online-Voting den beteiligten Schulklassen und weiteren
            interessierten Schüler*innen zur Verfügung gestellt. Die dort
            favorisierten Sätze pro Grundrecht wurden von einer Jury aus
            Expert*innen (die Mitglieder sind unten aufgeführt) abschließend
            geprüft und veröffentlicht. Im gesamten Prozess haben wir darauf
            geachtet, dass die Formulierungen und Begriffe der Schüler*innen
            möglichst unverändert blieben. Sofern Korrekturen vorgenommen
            wurden, war das lediglich bei Rechtschreibung, gendergerechter
            Sprache, Grammatik oder unangemessenen Bezeichnungen der Fall.
          </p>
          <h2 className={styles.title2}>Das Ergebnis</h2>
          <p className={styles.text}>
            Ein Plakat und diese Website, welche die von Schüler*innen
            formulierten und von ihnen selbst favorisierten Sätze zu den
            Grundrechten einfach verständlich abbilden. Die Grundrechte aus der
            Perspektive von Schüler*innen formuliert. Damit können Plakat und
            Website ein Ausgangspunkt für Gespräche, ein Einstieg ins Thema
            Demokratie & Grundgesetz oder der Anfang für neue Projekte sein.
          </p>
          <h2 className={styles.title2}>Der Verein 10drei</h2>
          <p className={styles.text}>
            Als gemeinnütziger Verein entwickeln wir innovative und
            wirkungsvolle Bildungsformate, um demokratische Grundwertebildung
            gemeinsam mit Schüler*innen und Lehrer*innen umzusetzen. Ein Fokus
            liegt dabei auf einfachen und skalierbaren Formaten, welche die
            zentralen Aussagen des Grundgesetzes erlebbar machen. Unsere Vision
            ist eine Gesellschaft, in der die im Grundgesetz enthaltenen Werte
            wie Würde, Freiheit und Gleichheit, Grundlage der alltäglichen
            Entscheidungsfindung sind. Dafür arbeiten wir mit Schüler*innen
            aller Schulformen (6. Klasse bis Oberstufe), Referendar*innen sowie
            Lehrkräften in ganz Deutschland zusammen und binden sie in die
            Entwicklung und Erprobung unserer Angebote ein.
          </p>
          <h2 className={styles.title2}>Die Mitglieder der GGS-Jury</h2>
          <p className={styles.text}>
            Prof. Dr. Sabine Anselm (Leiterin Forschungsstelle Werteerziehung
            und Lehrerbildung, LMU München)
            <br></br>
            Johanna (Schülerin, Gymnasium Holzkirchen)
            <br></br>
            Samira El Ouassil (Autorin und Kolumnistin)
            <br></br>
            Elisabeth Niejahr (Geschäftsführerin, Gemeinnützige Hertie-Stiftung)
            <br></br>
            Lydia Rautenberg (Verwaltungsrichterin)
            <br></br>
            Oliver Wurm (Publizist, Herausgeber Grundgesetz als Magazin)
            <br /> <br />
          </p>
          <div className={styles.videodiv}>
            <h2 className={styles.videoTitle}>
              Hidden Movers Award 2022 <br></br>GrundgeSÄTZE
            </h2>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4QpWnNldR8Q"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.iframe}
              ></iframe>
            </div>
            <br /> <br />
          </div>
          <div className={styles.andNow}>
            <h2 className={styles.title2}>Und jetzt?</h2>
            <p className={styles.text}>
              Das Plakat fürs Klassenzimmer kannst du unter{" "}
              <a
                className={styles.link}
                href="mailto:hallo@10drei.org?subject=Bestellung%20GGS-Plakat"
              >
                diesem Link
              </a>{" "}
              direkt und kostenlos bestellen. Die Workshops zum Projekt
              GrundgeSÄTZE können von Lehrer*innen und Referendar*innen mit
              unserem Toolkit weiterhin (natürlich ebenfalls kostenfrei)
              eigenständig durchgeführt werden. Über{" "}
              <a
                className={styles.link}
                href="https://forms.gle/npVDz7HGKXgLRpteA"
              >
                {" "}
                dieses Formular
              </a>{" "}
              kannst du dich bei Interesse direkt dafür anmelden oder
              zusätzliche Informationen anfordern.
              <br></br>
              Eine Übersicht zu allen Grundrechten findest du auf diesem Flyer,
              der auch als Unterrichtsmaterial kostenlos bei uns bestellt werden
              kann. Einen kurzen Erklärfilm speziell für Schüler*innen zum
              Grundgesetz findest du zudem{" "}
              <a
                className={styles.link}
                href="https://www.youtube.com/watch?v=TMtXKyWS784"
              >
                hier
              </a>
              . Und einen Einblick in die Entstehung der GrundgeSÄTZE bekommst
              du in{" "}
              <a
                className={styles.link}
                href="https://www.youtube.com/watch?v=4QpWnNldR8Q"
              >
                diesem Video
              </a>
              .
            </p>
          </div>

          <div className={styles.videodiv2}>
            <h2 className={styles.videoTitle}>
              Erklärungsfilm: Das Grundgesetz
            </h2>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TMtXKyWS784"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.iframe}
              ></iframe>
            </div>
            <br /> <br />
          </div>
          <div className={styles.filler}></div>
        </div>
      </div>

      <Footer mode="light" />
    </div>
  )
}

export default Projekt
