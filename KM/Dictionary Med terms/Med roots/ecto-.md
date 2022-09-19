---
tags: [" #medroot"]
aliases: [ect-]
forms: [prefix]
roots: [ecto-, ect-]
alphabet:: E
definition: [outside of]
---
>[!Note] DEFINITION of ecto-
>outside of (location)
> - differs to [[ec-]] in that it's a position rather than an action
> - similar to relationship between [[en-]] (movement) and [[endo-]] (position)
_____
>[!info]+ ETYMOLOGY of ecto-
>#greek
>- ect- before {vowel}
_____
>[!example]+ RELATED TERMS to ecto-
>
_____
>[!tip]+ DERIVATIONS of ecto-
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