const graphData = {
  "nodes": [
    {"id": "Projet MRS6 (Bouc-Bel-Air)", "label": "Data Center\nMRS6", "group": "Projet central", "size": 25, "detail": "Implantation d'un data center de 26 000m² par Digital Realty sur l'ancienne ZAC Decathlon."},
    {"id": "Digital Realty", "label": "Digital\nRealty", "group": "Porteurs / institutions du projet", "size": 20, "detail": "Multinationale américaine porteuse du projet avec 700 millions d'euros d'investissement."},
    {"id": "Fabrice Coquio", "label": "F.\nCoquio", "group": "Porte-parole / entreprises associées", "size": 15, "detail": "Directeur France de Digital Realty, défend l'éco-conception."},
    {"id": "Mairie Bouc-Bel-Air", "label": "Mairie\nBouc-Bel-Air", "group": "Élus / acteurs institutionnels", "size": 18, "detail": "Avis favorable au permis de construire (Maire: Mathieu Piétri)."},
    {"id": "RTE", "label": "RTE", "group": "Porteurs / institutions du projet", "size": 15, "detail": "En charge du raccordement THT et alerte sur les conflits d'usage."},
    {"id": "Le Nuage était sous nos pieds", "label": "Le Nuage\n(Collectif)", "group": "Noyau d’opposition local", "size": 18, "detail": "Association militant pour la matérialisation des infrastructures et un moratoire."},
    {"id": "FNE13", "label": "FNE13", "group": "Noyau d’opposition local", "size": 18, "detail": "Fédération s'opposant aux ogres énergétiques et réclamant un observatoire."},
    {"id": "Bouc-Bel-Air Environnement (BBAE)", "label": "BBAE", "group": "Organisations agricoles / foncières", "size": 15, "detail": "Association locale favorable avec réserves, en conflit avec la ligne FNE13."},
    {"id": "Hervé Plisson", "label": "H.\nPlisson", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Riverain opposant, tête de liste Bouc-Bel-Air pour tous."},
    {"id": "Stéphane Coppey", "label": "S.\nCoppey", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Porte-parole FNE13."},
    {"id": "Antoine Devillet", "label": "A.\nDevillet", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Porte-parole Le Nuage était sous nos pieds."},
    {"id": "Sébastien Barles", "label": "S.\nBarles", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Élu métropolitain opposé."}
  ],
  "links": [
    {"source": "Digital Realty", "target": "Projet MRS6 (Bouc-Bel-Air)", "kind": "Porte le projet"},
    {"source": "Fabrice Coquio", "target": "Digital Realty", "kind": "Dirige"},
    {"source": "Mairie Bouc-Bel-Air", "target": "Projet MRS6 (Bouc-Bel-Air)", "kind": "Avis favorable sous conditions"},
    {"source": "RTE", "target": "Projet MRS6 (Bouc-Bel-Air)", "kind": "Raccorde électriquement"},
    {"source": "Le Nuage était sous nos pieds", "target": "Projet MRS6 (Bouc-Bel-Air)", "kind": "S'oppose (Moratoire)"},
    {"source": "Antoine Devillet", "target": "Le Nuage était sous nos pieds", "kind": "Porte-parole"},
    {"source": "FNE13", "target": "Projet MRS6 (Bouc-Bel-Air)", "kind": "S'oppose"},
    {"source": "Stéphane Coppey", "target": "FNE13", "kind": "Porte-parole"},
    {"source": "Bouc-Bel-Air Environnement (BBAE)", "target": "Projet MRS6 (Bouc-Bel-Air)", "kind": "Avis favorable avec réserves"},
    {"source": "Bouc-Bel-Air Environnement (BBAE)", "target": "FNE13", "kind": "Critique la posture radicale"},
    {"source": "Hervé Plisson", "target": "Projet MRS6 (Bouc-Bel-Air)", "kind": "S'oppose (Nuisances locales)"},
    {"source": "Sébastien Barles", "target": "Projet MRS6 (Bouc-Bel-Air)", "kind": "S'oppose politiquement"}
  ]
}
