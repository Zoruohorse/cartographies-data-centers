const graphData = {
  
  "new_nodes": [
    {
      "id": "Data Center de Petit-Landau",
      "label": "Data Center\nPetit-Landau",
      "group": "Projet central",
      "size": 34,
      "detail": "Projet de centre de données Microsoft dédié à l'IA générative à Petit-Landau et Hombourg. Emprise de 36 à 40 hectares (plus de 50 terrains de football) sur des terres agricoles dont un tiers cultivées en bio. Investissement supérieur à 2 milliards d'euros pour une consommation électrique projetée entre 1 500 et 1 750 GWh par an, soit l'équivalent de 80 % de celle de l'ensemble des ménages du Haut-Rhin."
    },
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
    {"id": "Microsoft", "label": "Microsoft", "group": "Porteurs / institutions du projet", "size": 30, "detail": "Porteur industriel du projet de data center."},
    {"id": "RTE", "label": "RTE", "group": "Porteurs / institutions du projet", "size": 25, "detail": "Aménageur du réseau et du transformateur électrique pour le site."},
    {"id": "SMO", "label": "SMO Ports Sud Alsace", "group": "Porteurs / institutions du projet", "size": 20, "detail": "Syndicat mixte vendeur des terrains agricoles."}
  ],
  "new_links": [
    {"source": "Microsoft", "target": "Data Center de Petit-Landau", "kind": "Porteur industriel"},
    {"source": "RTE", "target": "Data Center de Petit-Landau", "kind": "Raccordement au réseau électrique"},
    {"source": "SMO", "target": "Data Center de Petit-Landau", "kind": "Vente du foncier agricole"},
    {"source": "Collectif IA pas moyen", "target": "Data Center de Petit-Landau", "kind": "Opposition frontale"},
    {"source": "Alsace Nature", "target": "Data Center de Petit-Landau", "kind": "Opposition frontale"},
    {"source": "Alter Alsace Énergies", "target": "Data Center de Petit-Landau", "kind": "Opposition frontale"},
    {"source": "Confédération paysanne", "target": "Data Center de Petit-Landau", "kind": "Opposition à l'artificialisation"},
    {"source": "Thierry Engasser", "target": "Data Center de Petit-Landau", "kind": "Opposition et dénonciation de déconnexion"},
    {"source": "Cécile Germain-Ecuer", "target": "Data Center de Petit-Landau", "kind": "Demande de suspension de la procédure"},
    {"source": "MRAe Grand Est", "target": "Data Center de Petit-Landau", "kind": "Avis critique et demande de compléments"},
    {"source": "Fabian Jordan", "target": "Data Center de Petit-Landau", "kind": "Soutien et validation politique locale"},
    {"source": "Laurent Riche", "target": "Data Center de Petit-Landau", "kind": "Soutien au développement économique"}
  ]
}
