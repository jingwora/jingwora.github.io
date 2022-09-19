---
tags: [" #medroot"]
aliases: []
roots: [phon-]
forms: [combining]
alphabet:: P
definition: [voice, sound]
---
>[!Note] DEFINITION of phon-
>voice, sound
>*hear also: [[acou-]] (hear), [[aur-]] (ear), [[lal-]] (talk), [[phem-]] (speech), [[pha-]] (speak)*
_____
>[!info]+ ETYMOLOGY of phon-
>##greek phone
_____
>[!example]+ RELATED TERMS to phon-
>
>| [[phon-]] | voice | sound |
|:---------:|:-----:|:-----:|
| [[son-]]  |   -   | YES      |
_____
>[!tip]+ DERIVATIONS of phon-
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