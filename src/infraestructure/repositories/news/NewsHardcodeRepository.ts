import { injectable } from 'inversify';
import INewsRepository from "@application/repositories/INewsRepository";
import Filter from "@domain/Filter/NewsFilter";
import News from "@domain/News/News";
import Pagination from "@domain/Pagination/Pagination";
import { VERIFIED_STATUS } from '@constants/verifiedStatus';

@injectable()
export default class NewsHardcodeRepository implements INewsRepository {

    private newsList = [
    new News(1, "Peso digital: el proyecto de las provincias para financiarse digitalmente",
     "Las provincias del norte argentino quieren atraer inversores con la creación de una criptomoneda. De qué se trata.",
      `body`, "https://www.infotechnology.com/files/image/94/94817/6023e1219a36e.jpg", undefined),
    new News(2, "La misión de la NASA llegó a Marte", "La nave espacial Mars 2020 de la NASA, con el rover Perseverance y el Helicóptero Ingenuity Mars dentro, se posó en marte a las 17.56 de Argentina y de inmediato emitió señales de que comenzó a funcionar en la superficie del planeta rojo.", `body`, "https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2021-02/142159-whatsapp-20image-202021-02-18-20at-2018-33-21.jpeg?itok=f5APTCfe", true),
    new News(3, "Tesla compra 1.5B en bitcoins", "La empresa de autos electricos dirigida por Elon Musk compra bitcoins", `body`, "https://www.diario26.com/media/image/2021/02/10/468072.jpg", true),
    new News(4, "Sputnik V genera cancer", "Los expertos afirman que la vacuna rusa tiene 37% de probabilidad de generar cancer", `body`, "https://ichef.bbci.co.uk/news/640/cpsprodpb/E0BA/production/_113903575_tv062871761.jpg", false),
    new News(5, "La historia al descubierto de WallStreetBets, la comunidad de Reddit que ha hecho temblar a Wall Street", "Las acciones de GameStop, AMC y otras compañías se han disparado durante esta semana. Para brókeres y traders, estos saltos de precio tan masivos son toda una anomalía. Te contamos lo ocurrido.", `body`, "https://www.latercera.com/resizer/EE9y6w-NqGjDg2-HrTvIKz9DkHM=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/WECIEQOO46HQUDHNPKE5CGX4CU.jpg", true),
    new News(6, "Grupo de adolescentes rompen el mercado", "Se trata de jovenes de entre 16 y 19 años, pertenecientes a r/wallstreebets en Reddit, manipulan el mercado.", `body`, "https://cnet2.cbsistatic.com/img/1ngKiToVevZS2XUj_wAWt8ZiSGI=/1200x675/2020/04/14/904dbbcb-8c07-499b-81ba-a0e9fafd2ba1/reddit-logo-0893.jpg", false),
    new News(7, "El bitcoin llegó a su precio récord: quién es Craig Wright, el presunto creador de la criptomoneda", "Craig Wright es un empresario y científico australiano que, en 2015, reconoció que él es Satoshi Nakamoto, el alias del creador de la moneda digital bitcoin. Mucho se debatió sobre la veracidad de su afirmación pero allegados al grupo fundacional de la moneda confirmaron que él fue uno de los ideólogos princiaples.", `body`, "https://mk0criptonoticijjgfa.kinstacdn.com/wp-content/uploads/2019/05/craigh-wright.jpg", false),
    new News(8, "Confirman a Jar Jar Binks como enemigo de la proxima saga", "La nueva saga de Star Wars estará disponible en Disney+ y estallaron las criticas con la noticia", `body`, "https://i.ytimg.com/vi/p8Djj2rZgrY/maxresdefault.jpg", undefined),
new News(9, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg"),
new News(10, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", true),
new News(11, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", false),
new News(12, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg"),
new News(13, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", true),
new News(14, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", false),
new News(15,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg"),
new News(16,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", true),
new News(17,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", false),
new News(18,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg"),
new News(19,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", true),
new News(20,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", false),
new News(21, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg"),
new News(22,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", true),
new News(23,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", false),
new News(24,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg"),
new News(25, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", true),
new News(26, "Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", false),
new News(27,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg"),
new News(28,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", true),
new News(29,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg", false),
new News(30,"Con fuertes advertencias, Biden le exigió a Rusia que libere a Navalny \"sin condiciones\"",
    "WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar \"el avance del autoritarismo\" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.",
    ` WASHINGTON.- Con fuertes advertencias a Pekín y Moscú, el presidente de Estados Unidos, Joe Biden, prometió enfrentar "el avance del autoritarismo" y revitalizar el liderazgo de Washington en la arena internacional con una agenda arraigada en la diplomacia y la cooperación internacional que hará hincapié en la defensa de la democracia, los derechos humanos y la lucha contra el cambio climático.

    "Estados Unidos está de vuelta. La diplomacia está de vuelta al centro de nuestra política exterior", afirmó Biden en un discurso en el Departamento de Estado en Washington. "El liderazgo de Estados Unidos debe enfrentar este nuevo momento de avance del autoritarismo, incluyendo las crecientes ambiciones de China de rivalizar con Estados Unidos y la determinación de Rusia de dañar y alterar nuestra democracia", enfatizó el mandatario.
    
    "La gente no tiene qué comer": el país americano que sufre como ningún otro la segunda ola
    
    Entre los nuevos desafíos que enfrenta el mundo, Biden mencionó la pandemia del coronavirus , el cambio climático y la proliferación nuclear, y prometió que su gobierno se recostará en la diplomacia para reconstruir sus lazos históricos con otras naciones y el "músculo de las alianzas democráticas" para promover valores como la libertad, el respeto por el imperio de la ley y la promoción de oportunidades.
    
    "Las alianzas de Estados Unidos son nuestro gran activo, y liderar con diplomacia significa estar hombro a hombro con nuestros aliados y socios claves una vez más", afirmó Biden.
    
    El discurso de Biden, su primer mensaje dedicado en exclusiva a la política exterior de su gobierno, buscó marcar un claro contraste con la política de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero", tensó las relaciones con los aliados históricos e imprimió una amplia retirada de Washington de la escena global. Sus críticos acusaron a Trump de darle vía libre a dictadores y autócratas -en particular, al presidente ruso, Vladimir Putin -, y de darle la espalda a la defensa de los derechos humanos o la protección del medio ambiente. Pero sus partidarios destacan entre sus logros los acuerdos de paz entre Israel y el mundo árabe, o el hecho de Trump dejó la Casa Blanca sin haber iniciado una guerra.
    
    "Le dejé en claro al presidente Putin, de una manera muy diferente a mi predecesor, que los días en que Estados Unidos se entregaba atado ante acciones agresivas de Rusia, como la injerencia en nuestras elecciones, ciberataques, el envenenamiento a sus ciudadanos se terminaron", indicó. "Seremos más efectivos en lidiar con Rusia cuando trabajemos en coalición y coordinación con otros socios que piensen como nosotros", insistió.
    El pedido por Navalny
    
    Biden le dedicó un párrafo de su discurso al líder opositor ruso, Alexei Navalny: dijo que su encarcelamiento era "profundamente preocupante", y le exigió al Kremlin que lo libere "de inmediato y sin condiciones". Al hablar sobre China, a la que distinguió como "nuestro competidor más serio", Biden prometió enfrentar los "abusos económicos" de Pekín y contrarrestar sus ataques a los derechos humanos y a la propiedad intelectual. "Competiremos desde una posición de fortaleza", señaló. Biden también ofreció otros claros contrastes con el trumpismo al prometer restaurar el programa de refugiados de Estados Unidos, y dedicar una línea a la defensa de la libertad de prensa.
    
    "Creemos que una prensa libre no es un adversario, más bien es esencial", dijo el presidente. "La prensa libre es esencial para la salud de una democracia", insistió.
    
    Antes de brindar su discurso, Biden fue presentado por el secretario de Estado, Antony Blinken, ante un pequeño público de empleados del Departamento de Estado reunidos para recibir al nuevo mandatario. Blinken recordó que ningún otro presidente había llegado a la Casa Blanca con tanta experiencia en política exterior, el área a la cual Biden le dedicó la mayor cantidad de tiempo en su larga carrera política. El mandatario dio un breve discurso que buscó, ante todo, levantar la moral de una agencia ignorada, vapuleada y opacada por la Casa Blanca durante el gobierno de Donald Trump, quien gobernó bajo el mantra "Estados Unidos, primero".
    
    Casi como si fuera un entrenador arengando a sus jugadores antes de un partido, Biden cubrió de elogios a los funcionarios y empleados del Departamento de Estado: destacó su "gran capacidad intelectual", su "coraje", y les dijo que eran "la cara de Estados Unidos" y que estarán "en el corazón" de su gobierno.
    
    "Nunca nos decepcionaron. Creo en ustedes. Los necesitamos desesperadamente. Confío en ustedes y los respaldaré. Eso, se los prometo", les dijo Biden.
    Por: Rafael Mathus Ruiz `, "https://bucket2.glanacion.com/anexos/fotos/63/3485163w1033.jpg")]

    public async list(pagination: Pagination, filter: Filter): Promise<News[]> {
        const filterNews = (news: News) => {
            if (filter.verified) {
                if ((filter.verified === VERIFIED_STATUS.pending && news.verified === undefined) ||
                    (filter.verified === VERIFIED_STATUS.false && news.verified === false) ||
                    (filter.verified === VERIFIED_STATUS.true && news.verified === true)) {
                    return true;
                }
                return false;
            }
            return true;
        }
        const responce = this.newsList
            .filter(filterNews)
            .slice(pagination.getCurrentPage() * pagination.limit, (pagination.getCurrentPage() + 1) * pagination.limit);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(responce);
            }, 1 * 1000)
        });
    }

    public async get(id: number): Promise<News> {
        const responce = this.newsList.filter(n => n.id === id).pop();
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(responce);
            }, 1 * 1000)
        });
    }
}
