---
tags: [" #medroot"]
aliases: [ascit-]
roots: [asc-, ascit-]
forms: [combining]
alphabet:: A
definition: [sac, bag, bladder]
---
>[!Note] DEFINITION of asc-
>sac, bag, bladder (see also: [[burs-]])
_____
>[!info]+ ETYMOLOGY of asc-
>#greek askos (leather bag)
_____
>[!example]+ RELATED TERMS to asc-
>
>| [[asc-]]   | sac | bag | bladder | -    |
| ---------- | --- | --- | ------- | ---- |
| [[cyst-]]  | -   | -   | YES     | cyst |
| [[vesic-]] | -   | -   | bladder | -     |
_____
>[!tip]+ DERIVATIONS of asc-
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