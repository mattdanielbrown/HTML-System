import React, { Component } from 'react';

class Module extends Component {
    
    render() {
        return (
            <div className="Text">
                <h1>Esto es un texto</h1>
                <h2>Esto es un texto</h2>
                <h3>Esto es un texto</h3>
                <p>
                    Puedes utilizar textos en <b>negrita</b>, no te parece increible?.
                    También puedes indicar textos <mark>remarcados</mark> con la etiqueta mark.
                    Si necesitas insertar <a  href="/#test">un enlace</a> utiliza la etiqueta <b>a</b>, si no te gusta, borra esta propiedad del CSS.
                    Puedes mostrar un texto <del>eliminado</del> con la etiqueta <b>del</b> o si <s>ya no es correcto</s> usar la etiqueta <b>s</b>, para el texto <ins>corregido</ins> utiliza el poco conocido tag ins.
                    Para simplemente <u>subrayar</u> un texto utiliza <b>u</b>.
                    Si quieres un texto <small>pequeño</small>, utiliza small.
                    Para un texto con mucha <strong>énfasis fuerte</strong> utiliza <b>strong</b>.
                    Si lo que quieres es un tipo de <em>énfasis ligera</em> utiliza <b>em</b>.
                    Las <abbr title="No te parece increíble?">abreviaturas</abbr> las mostramos con <b>abbr</b>
                    </p>
                    <p>
                        Si necesitas insertar <cite>al autor de una cita</cite> no te olvides de la etiqueta <b>cite</b>.
                        El <code>código</code> lo mostramos con la etiqueta <b>code</b>.
                        Aunque no te lo creas, también puedes indicar un texto alreves con la etiqueta <b>bdo</b> y el resultado quedaría así: <bdo dir="rtl">abcdef</bdo>.
                        Definir <dfn id="text">un texto</dfn> es posible mediante la etiqueta <b>dfn</b>, ahora clica <a href="#text">aquí</a> y el scroll hará magia.
                       
                        El tag <b>time</b> apenas se usa, pero mostrar una fecha así <time>10:00</time> mola.
                        Si necesitas mostrar una <var>variable</var> con <b>var</b>. Puedes mostrar <q>una cita entre comillas</q> con la equieta <b>q</b>.
                    </p>
                    <p>
                        Un texto en <sub>subíndice</sub> con <b>sub</b> y un texto <sup>superíndice</sup> con <b>sup</b>.
                        
                    </p>
                <hr/>
                <blockquote>Este es un texto dentro de un <b>blockquote</b>. <cite>Salbatore</cite> <sub>CTO Alicunde</sub></blockquote>
                <hr/>
                <h2>Listados</h2>
                <p>No nos volvamos locos, esto es una lista.</p>
                <ul >
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit
                        <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                        </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                </ul>
                <p>Para una lista ordenada utilizamos el tag <b>ol</b> y se muestra así:</p>
                <ol>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ol>
                <p>Si necesitas mostrar una lista de descripciones utiliza el tag <b>dl</b>, <b>dt</b> y <b>dd</b></p>
                <dl >
                    <dt >Description lists</dt>
                    <dd>A description list is perfect for defining terms.</dd>
                    <dt>Euismod</dt>
                    <dd>
                        Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
                    </dd>
                    <dt>Nesting</dt>
                    <dd>
                        <dl>
                            <dt>Nested definition list</dt>
                            <dd>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                        </dl>
                        <dl>
                            <dt>Nested definition list</dt>
                            <dd>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                        </dl>
                    </dd>
                    </dl>
                <h2>Tablas</h2>
                <p>No te voy a engañar, tal vez la más ingeniosa creación del HTML son las tablas. Una calidad sin igual.</p>
                <table>
                    <caption>Monthly savings</caption>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Savings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>January</td>
                            <td>$22</td>
                            <td>$88</td>
                        </tr>
                        <tr>
                            <td>February</td>
                            <td>$12</td>
                            <td>$23</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>February</td>
                            <td>$51</td>
                            <td>$33</td>
                        </tr>
                    </tfoot>
                </table>
                <hr/>
                <p>Aquí puedes ver el uso de la etiqueta <b>details</b>.</p>
                <details>
                    <summary>Desplegar los detalles</summary>
                    <p>Esto parece magia.</p>
                </details>
                <p>Algunas veces necesitamos mostrar un bloque de texto preformateado, para eso tenemos la etiqueta <b>pre</b>, queda tal que así:</p>
                <pre>
                    La vida parece maravillosa
                </pre>
                <p>La devolución de un programa la mostramos como bloque con la etiqueta <b>samp</b>.</p>
                <samp>File not found.<br/>Press F1 to continue</samp>
            </div>
        );
    }
}

export default Module;
