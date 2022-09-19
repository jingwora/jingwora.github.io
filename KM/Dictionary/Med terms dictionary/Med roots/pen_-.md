---
tags: [" #medroot"]
aliases: []
roots: [pen_-]
forms: [combining]
alphabet:: P
definition: [penis]
---
>[!Note] DEFINITION of pen_-
>penis
_____
>[!info]+ ETYMOLOGY of pen_-
>#latin penis (tail)
_____
>[!example]+ RELATED TERMS to pen_-
>
>| [[pen_-]]  | penis |
|:----------:| ----- |
| [[phall-]] |    YES   |
_____
>[!tip]+ DERIVATIONS of pen_-
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