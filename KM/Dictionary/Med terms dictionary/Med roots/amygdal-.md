---
tags: [" #medroot"]
aliases: []
roots: [amygdal-]
forms: [combining]
alphabet:: A
definition: [tonsil]
---
>[!Note] DEFINITION of amygdal-
>tonsil
_____
>[!info]+ ETYMOLOGY of amygdal-
>#greek amygdale (almond)
_____
>[!example]+ RELATED TERMS to amygdal-
>```dataview
>TABLE definition AS Definition
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>```
_____
>[!tip]+ DERIVATIONS of amygdal-
>```dataview
>TABLE definition AS Definition 
>FROM #medterm 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0
>SORT file.name ASC
>```

[[Med roots dictionary]]