---
tags: [" #medroot"]
aliases: []
roots: [lep-]
forms: [combining]
alphabet:: L
definition: [attach, seizure]
---
>[!Note] DEFINITION of lep-
>attach, seizure
_____
>[!info]+ ETYMOLOGY of lep-
>#greek lepsis
_____
>[!example]+ RELATED TERMS to lep-
>
_____
>[!tip]+ DERIVATIONS of lep-
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