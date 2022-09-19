---
tags: [" #medroot #greek"]
aliases: []
forms: [combining]
roots: [chlor-]
alphabet:: C
definition: [green]
---
>[!Note] Definition of chlor-
>green
_____
>[!info]+ Etymology of chlor-
>#greek chloros
_____
>[!example]+ Related terms
>
_____
>[!tip]+ Derivations
>```dataview
TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]