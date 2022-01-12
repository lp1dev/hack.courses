/* TD09 - XMLParser

Il est maintenant de s'attaquer à quelque chose
d'un peu plus conséquent! Pour cet exercice, vous
allez travailler en pseudo TDD:
Des tests ont été écrits (et vous donnent des
indications précises sur ce que vous devez réaliser),
à vous de faire en sorte d'écrire le code nécessaire
pour que l'ensemble des tests passent!

La classe que vous devez écrire est la classe XMLParser
contenant une méthode parse(data) qui permet de parser
du XML contenu dans une chaîne de caractères.

https://fr.wikipedia.org/wiki/Extensible_Markup_Language

Attention: 

Vous ne devez PAS modifier les tests


*/

/* TD Part */

class XMLParser {
}

/* Testing part*/
import { expect } from 'chai';
import 'mocha';

describe('TD09', () => {
    describe('XMLParser', () => {
        const parser: any = XMLParser;
        it('Should expose a parse method', () => {
            expect(parser).to.exist;
            expect(parser['parse']).to.exist;
            expect(parser['parse']).to.be.a('function');
        });
        describe('XMLParser.parse', () => {
            it('Should return the data if not parseable', () => {
                const data = 'Test';
                expect(parser.parse(data)).to.be.equal(data);
            });
            it('Should be able to parse a single XML node', () => {
                const data = '<tag>42</tag>'
                expect(parser.parse(data)).to.deep.equal({ tag: 42 });
            });
            it('Should be able to parse a nested XML node', () => {
                const data = '<parent><child>42</child></parent>'
                const obj = { parent: { child: 42 } };
                expect(parser.parse(data)).to.deep.equal(obj);
            });
            it('Should be able to parse double nested XML nodes', () => {
                const data = '<parent><child1><child2>42</child2></child1></parent>';
                const obj = { parent: { child1: { child2: 42 } } }
                expect(parser.parse(data)).to.deep.equal(obj);
            })
            it('Should put nodes with the same tag and level in an array', () => {
                const data = '<parent><child>42</child><child>43</child></parent>';
                const obj = { parent: [42, 43] }
                expect(parser.parse(data)).to.deep.equal(obj);
            })
            it('Should be able to make all of the previous rules work together', () => {
                const data = `
                    <header>
                        <title>Application Data</title>
                        <description>Application logic description document</description>
                    </header>
                    <pages>
                        <page>home</page>
                        <page>products</page>
                        <page>about</page>
                        <page>contact</page>
                    </pages>
                    <users>
                        <user>
                            <username>Guest</username>
                            <group>100</group>
                        </user>
                    <user>
                        <username>Admin</username>
                        <group>0</group>
                        </user>
                    </users>`
                const obj = {
                    header: {
                        title: 'Application Data',
                        description: 'Application logic description document'
                    },
                    pages: [
                        'home',
                        'products',
                        'about',
                        'contact'
                    ],
                    users: [
                        {
                            username: 'Guest',
                            group: 100
                        },
                        {
                            username: 'Admin',
                            group: 0
                        }
                    ]
                }
                expect(parser.parse(data)).to.deep.equal(obj);
            })
        })
    });
});