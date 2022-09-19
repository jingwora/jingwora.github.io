---
tags: [" #medroot"]
aliases: [pulmon-]
roots: [pulm-, pulmon-]
forms: [combining]
alphabet:: P
definition: [lung, pulmonary artery]
---
>[!Note] DEFINITION of pulm-
>1. lung
>2. pulmonary artery
_____
>[!info]+ ETYMOLOGY of pulm-
>#latin pulmo, pulmonis
_____
>[!example]+ RELATED TERMS to pulm-
>
>|  [[pulm-]]   | lung | pulmonary artery |
|:------------:|:----:|:----------------:|
| [[pneumon-]] | YES  | -                 |
_____
>[!tip]+ DERIVATIONS of pulm-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]