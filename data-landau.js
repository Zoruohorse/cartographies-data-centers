const graphData = {
  "new_nodes": [
    {"id": "Michel", "label": "Michel", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Habitant dénonçant la prédation énergétique et foncière."},
    {"id": "Philippe", "label": "Philippe", "group": "Opposants / critiques nommément cités", "size": 15, "detail": "Habitant critique sur le manque d'information citoyenne."},
    {"id": "Cécile Germain-Ecuer", "label": "C. Germain-Ecuer", "group": "Élus / acteurs institutionnels", "size": 20, "detail": "Conseillère régionale écologiste demandant la suspension du projet."},
    {"id": "Thierry Engasser", "label": "T. Engasser", "group": "Élus / acteurs institutionnels", "size": 20, "detail": "Maire de Hombourg opposé au projet déconnecté du territoire."},
    {"id": "Léonie Hebert", "label": "L. Hebert", "group": "Élus / acteurs institutionnels", "size": 15, "detail": "Cheffe de file Mulhouse en commun, critique."},
    {"id": "Fabian Jordan", "label": "F. Jordan", "group": "Élus / acteurs institutionnels", "size": 25, "detail": "Président de M2A, favorable et garant du projet."},
    {"id": "Laurent Riche", "label": "L. Riche", "group": "Élus / acteurs institutionnels", "size": 20, "detail": "VP Développement économique M2A, favorable."},
    {"id": "Carole Talleux", "label": "C. Talleux", "group": "Élus / acteurs institutionnels", "size": 20, "detail": "Maire de Petit-Landau, favorable au projet."},
    {"id": "Olivier Becht", "label": "O. Becht", "group": "Élus / acteurs institutionnels", "size": 20, "detail": "Député ayant attiré Microsoft en Alsace."},
    {"id": "Collectif IA pas moyen", "label": "IA pas moyen", "group": "Noyau d’opposition local", "size": 25, "detail": "Collectif de citoyens mobilisés contre le data center."},
    {"id": "Alsace Nature", "label": "Alsace Nature", "group": "Noyau d’opposition local", "size": 25, "detail": "Association alertant sur la chaleur, le bruit et l'énergie."},
    {"id": "Alter Alsace Énergies", "label": "Alter Alsace\nÉnergies", "group": "Noyau d’opposition local", "size": 20, "detail": "Association dénonçant l'accaparement de l'énergie et la dépendance aux GAFAM."},
    {"id": "Confédération paysanne", "label": "Conf.\npaysanne", "group": "Organisations agricoles / foncières", "size": 20, "detail": "Syndicat agricole défendant les terres face à l'artificialisation."},
    {"id": "MRAe Grand Est", "label": "MRAe", "group": "Élus / acteurs institutionnels", "size": 25, "detail": "Autorité environnementale émettant des réserves critiques sur le dossier."},
    {"id": "Mouvement écologiste indépendant", "label": "MEI", "group": "Noyau d’opposition local", "size": 15, "detail": "Parti opposé à l'artificialisation du Rhin."},
    {"id": "Microsoft", "label": "Microsoft", "group": "Porteurs / institutions du projet", "size": 35, "detail": "Porteur du projet de data center à Petit-Landau."},
    {"id": "RTE", "label": "RTE", "group": "Porteurs / institutions du projet", "size": 25, "detail": "Aménageur du réseau électrique pour le site."},
    {"id": "SMO", "label": "SMO Ports Sud Alsace", "group": "Porteurs / institutions du projet", "size": 20, "detail": "Syndicat mixte vendeur des terrains agricoles."}
  ],
  "new_links": [
    {"source": "Collectif IA pas moyen", "target": "Microsoft", "kind": "Opposition frontale"},
    {"source": "Alsace Nature", "target": "Microsoft", "kind": "Opposition frontale"},
    {"source": "Alter Alsace Énergies", "target": "Microsoft", "kind": "Opposition frontale"},
    {"source": "Confédération paysanne", "target": "SMO", "kind": "Opposition à l'artificialisation"},
    {"source": "Cécile Germain-Ecuer", "target": "Fabian Jordan", "kind": "Interpellation politique"},
    {"source": "Thierry Engasser", "target": "Microsoft", "kind": "Dénonciation de déconnexion"},
    {"source": "MRAe Grand Est", "target": "Microsoft", "kind": "Avis critique / demande de compléments"},
    {"source": "Olivier Becht", "target": "Microsoft", "kind": "Soutien et initiation du projet local"},
    {"source": "Microsoft", "target": "Fabian Jordan", "kind": "Partenariat d'implantation"},
    {"source": "Microsoft", "target": "RTE", "kind": "Demande de raccordement réseau"}
  ]
}
