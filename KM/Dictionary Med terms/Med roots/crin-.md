---
tags: [" #medroot"]
aliases: []
roots: [crin-]
forms: [combining]
alphabet:: C
definition: [secrete, secretion]
---
>[!Note] DEFINITION of crin-
>secrete, secretion
_____
>[!info]+ ETYMOLOGY of crin-
>#greek krinein 9separate)
_____
>[!example]+ RELATED TERMS to crin-
>
>| [[crin-]] | secrete | secretion | -   |
| --------- | ------- | --------- | --- |
| [[rhe-]]  | YES     | -         | flow    |
_____
>[!tip]+ DERIVATIONS of crin-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]