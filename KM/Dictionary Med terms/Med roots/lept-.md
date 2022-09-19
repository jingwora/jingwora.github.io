---
tags: [" #medroot"]
aliases: []
roots: [lept-]
forms: [combining]
alphabet:: L
definition: [thin, fine, slight]
---
>[!Note] DEFINITION of lept-
>thin, fine, slight
_____
>[!info]+ ETYMOLOGY of lept-
>#greek leptos
_____
>[!example]+ RELATED TERMS to lept-
>
_____
>[!tip]+ DERIVATIONS of lept-
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