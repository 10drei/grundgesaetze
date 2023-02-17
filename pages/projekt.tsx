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
            Im Rahmen des Demokratie-Projektes GrundgeSÄTZE haben über 500
            Schüler*innen deutschlandweit unsere Grundrechte in eigenen Worten
            formuliert. Auf dieser Website sind die Sätze zu sehen, die in einem
            Online-Voting der Jugendlichen die meisten Stimmen erhielten und von
            einer Jury aus Expert*innen geprüft wurden.
            <br /> <br />
            Die Herausforderung: In unserer Verfassung stecken unglaublich viele
            wertvolle Aussagen für den Alltag, allerdings ist das auf den ersten
            Blick oft nicht erkennbar. Das Grundgesetz ist ein komplizierter
            Gesetzestext, der in der Schule oft theoretisch besprochen wird,
            anstatt praktisch behandelt zu werden. In jedem der Grundrechte
            stecken allerdings sehr viele ganz konkrete Werte und Aussagen für
            unseren alltäglichen Umgang miteinander.
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
            Aus diesem Grund hat der Verein 10drei im Jahr 2020 das Projekt
            “GrundgeSÄTZE - einfach für alle” initiiert. Hierfür wurden die
            Grundrechte (Artikel 1 - 19 des Grundgesetzes) sowie der Artikel 20a
            als Ausgangspunkt genommen. Schüler*innen aller Schulformen und von
            der 7. bis zur 11. Klasse haben in acht verschiedenen Bundesländern
            in Workshops diese Grundrechte frei und mit ihren eigenen Worten
            formuliert. Anschließend wurden alle Sätze von 10drei gesammelt und
            in einem Online-Voting den beteiligten Schulklassen und weiteren
            interessierten Schüler*innen zur Verfügung gestellt. Die dort
            favorisierten Sätze wurden von einer Jury aus Expert*innen (die
            Mitglieder sind unten aufgeführt) abschließend geprüft und
            veröffentlicht. Im gesamten Prozess haben wir darauf geachtet, dass
            keine Formulierungen oder Begriffe in den Sätzen der Schüler*innen
            verändert werden. Sofern Korrekturen vorgenommen wurden, war das
            lediglich bei Rechtschreibung, Grammatik oder unangemessenen
            Bezeichnungen der Fall.
          </p>
          <h2 className={styles.title2}>Das Ergebnis</h2>
          <p className={styles.text}>
            Ein Plakat und diese Website, welche die von Schüler*innen
            formulierten und von ihnen selbst ausgewählten Sätze zu den
            Grundrechten einfach verständlich abbilden. Die Grundrechte aus der
            Perspektivedem Blick von Schüler*innen formuliert. Damit können
            Plakat und Website natürlich auch ein Ausgangspunkt für Gespräche,
            ein Einstieg ins Thema Demokratie & Grundgesetz oder der Anfang für
            neue Projekte sein.
          </p>
          <h2 className={styles.title2}>Die GGS-Jury</h2>
          <p className={styles.text}>
            Mitglieder der Jury waren Prof. Dr. Sabine Anselm, Samira El
            Ouassil, Elisabeth Niejahr, Johanna, Oliver Wurm, Schülersprecher
          </p>
          <h2 className={styles.title2}>Und jetzt?</h2>
          <p className={styles.text}>
            Das Plakat fürs Klassenzimmer kann unter diesem Link direkt und
            kostenlos bestellt werden. Die Workshops zum Projekt GrundgeSÄTZE
            können von Lehrer*innen und Referendar*innen mit unserem Toolkit
            (natürlich ebenfalls kostenfrei) eigenständig durchgeführt werden.
            Über dieses Formular können weitere Informationen angefordert
            werden.
            <br /> <br />
            Eine Übersicht zu allen Grundrechten findest du auf diesem Flyer,
            der auch als Unterrichtsmaterial bei uns bestellt werden kann. Mehr
            Informationen zum Grundgesetz findest du übrigens in diesem Video.
            <br /> <br />
          </p>
          <div className={styles.videodiv}>
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
                className={styles.video1}
              ></iframe>
            </div>
            <br /> <br />
          </div>
          <div className={styles.verein}>
            <h2 className={styles.title2}>Der Verein 10drei</h2>
            <p className={styles.text}>
              Als gemeinnütziger Verein entwickeln wir innovative und
              wirkungsvolle Bildungsformate, um demokratische Grundwertebildung
              gemeinsam mit Schüler*innen und Lehrer*innen umzusetzen. Ein Fokus
              liegt dabei auf einfachen und skalierbaren Formaten, welche die
              zentralen Aussagen des Grundgesetzes erlebbar machen. Unsere
              Vision ist eine Gesellschaft, in der die im Grundgesetz
              enthaltenen Werte wie Würde, Freiheit und Gleichheit, Grundlage
              der alltäglichen Entscheidungsfindung sind. Dafür arbeiten wir mit
              Schüler*innen aller Schulformen (6. Klasse bis Oberstufe),
              Referendar*innen sowie Lehrkräften in ganz Deutschland zusammen
              und binden sie in die Entwicklung und Erprobung unserer Angebote
              ein.
            </p>
          </div>
        </div>
      </div>

      <Footer mode="light" />
    </div>
  )
}

export default Projekt
