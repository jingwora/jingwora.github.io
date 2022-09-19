---
tags: [" #medroot"]
aliases: [esthes-]
roots: [esthe-, esthes-]
forms: [combining]
alphabet:: E
definition: [sensation, sensitivity, sense]
---
>[!Note] DEFINITION of esthe-
>sensation, sensitivity, sense
_____
>[!info]+ ETYMOLOGY of esthe-
>#greek aisthesis
_____
>[!example]+ RELATED TERMS to esthe-
>
_____
>[!tip]+ DERIVATIONS of esthe-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]