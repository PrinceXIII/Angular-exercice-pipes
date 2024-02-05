import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'recherche'
})
export class RecherchePipe implements PipeTransform {
  transform(chaines: string[], termeRecherche: string) {
      if (!chaines || !termeRecherche) {
        return chaines;
      }

      termeRecherche = termeRecherche.toLocaleLowerCase()

      return chaines.filter(chaine => {
        return chaine.toLocaleLowerCase().includes(termeRecherche);
      })
  }
}
