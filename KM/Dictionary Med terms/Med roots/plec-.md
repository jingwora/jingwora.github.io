---
tags: [" #medroot"]
aliases: [pleg-, plex-]
roots: [plec-, pleg-, plex-]
forms: [combining]
alphabet:: P
definition: [strike, paralyze]
---
>[!Note] DEFINITION of plec-
>strike, paralyze
_____
>[!info]+ ETYMOLOGY of plec-
>#greek plessein
_____
>[!example]+ RELATED TERMS to plec-
>
_____
>[!tip]+ DERIVATIONS of plec-
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