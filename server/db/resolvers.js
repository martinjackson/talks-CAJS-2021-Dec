

 import { GraphQLScalarType } from 'graphql'
 import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
 import { getQueryResult, execDbCmd } from './db-specific.js'

 const dateScalar = new GraphQLScalarType({
   name: 'Date',
   parseValue(value) {
     const d = new Date(value)
     const s = d.toISOString().substring(0, 10);
     console.log(`parseValue(${s})`);
     return s;
   },
   serialize(value) {                     // from DB to front end
     const d = new Date(value)
     const s = d.toISOString().substring(0, 10);
     // console.log(`serialize(${s})`);
      return s;
   },
 })

 const blobScalar = new GraphQLScalarType({
     name: 'Blob',
     parseValue(value) {
       return Buffer.from(value,'binary');
     },
     serialize(value) {
       return JSON.stringify(value);
     },
   })

 // Resolver to match the GraphQL query and return data
export const resolvers = {
   Date: dateScalar,
   Blob: blobScalar,
   JSON: GraphQLJSON,
   JSONObject: GraphQLJSONObject,

  Query: {
      country(root, where, context, info) {
         let fields = { "country_id": "country_id","country_iso_code": "country_iso_code","country_name": "country_name" }
      return getQueryResult('movies.country', fields, where);    // where can be {}
      },
      department(root, where, context, info) {
         let fields = { "department_id": "department_id","department_name": "department_name" }
      return getQueryResult('movies.department', fields, where);    // where can be {}
      },
      gender(root, where, context, info) {
         let fields = { "gender_id": "gender_id","gender": "gender" }
      return getQueryResult('movies.gender', fields, where);    // where can be {}
      },
      genre(root, where, context, info) {
         let fields = { "genre_id": "genre_id","genre_name": "genre_name" }
      return getQueryResult('movies.genre', fields, where);    // where can be {}
      },
      keyword(root, where, context, info) {
         let fields = { "keyword_id": "keyword_id","keyword_name": "keyword_name" }
      return getQueryResult('movies.keyword', fields, where);    // where can be {}
      },
      language(root, where, context, info) {
         let fields = { "language_id": "language_id","language_code": "language_code","language_name": "language_name" }
      return getQueryResult('movies.language', fields, where);    // where can be {}
      },
      language_role(root, where, context, info) {
         let fields = { "role_id": "role_id","language_role": "language_role" }
      return getQueryResult('movies.language_role', fields, where);    // where can be {}
      },
      movie(root, where, context, info) {
         let fields = { "movie_id": "movie_id","title": "title","budget": "budget","homepage": "homepage","overview": "overview","popularity": "popularity","release_date": "release_date","revenue": "revenue","runtime": "runtime","movie_status": "movie_status","tagline": "tagline","vote_average": "vote_average","vote_count": "vote_count" }
      return getQueryResult('movies.movie', fields, where);    // where can be {}
      },
      movie_cast(root, where, context, info) {
         let fields = { "movie_id": "movie_id","person_id": "person_id","character_name": "character_name","gender_id": "gender_id","cast_order": "cast_order" }
      return getQueryResult('movies.movie_cast', fields, where);    // where can be {}
      },
      movie_company(root, where, context, info) {
         let fields = { "movie_id": "movie_id","company_id": "company_id" }
      return getQueryResult('movies.movie_company', fields, where);    // where can be {}
      },
      movie_crew(root, where, context, info) {
         let fields = { "movie_id": "movie_id","person_id": "person_id","department_id": "department_id","job": "job" }
      return getQueryResult('movies.movie_crew', fields, where);    // where can be {}
      },
      movie_genres(root, where, context, info) {
         let fields = { "movie_id": "movie_id","genre_id": "genre_id" }
      return getQueryResult('movies.movie_genres', fields, where);    // where can be {}
      },
      movie_keywords(root, where, context, info) {
         let fields = { "movie_id": "movie_id","keyword_id": "keyword_id" }
      return getQueryResult('movies.movie_keywords', fields, where);    // where can be {}
      },
      movie_languages(root, where, context, info) {
         let fields = { "movie_id": "movie_id","language_id": "language_id","language_role_id": "language_role_id" }
      return getQueryResult('movies.movie_languages', fields, where);    // where can be {}
      },
      person(root, where, context, info) {
         let fields = { "person_id": "person_id","person_name": "person_name" }
      return getQueryResult('movies.person', fields, where);    // where can be {}
      },
      production_company(root, where, context, info) {
         let fields = { "company_id": "company_id","company_name": "company_name" }
      return getQueryResult('movies.production_company', fields, where);    // where can be {}
      },
      production_country(root, where, context, info) {
         let fields = { "movie_id": "movie_id","country_id": "country_id" }
      return getQueryResult('movies.production_country', fields, where);    // where can be {}
      }
  },
Mutation: {
  createCountry(root, {input}, context, info) {
       let fields = { "country_id": "country_id","country_iso_code": "country_iso_code","country_name": "country_name" }
    return execDbCmd("INSERT", "movies.country", fields, input);
  },
  updateCountry(root, {country_id, input}, context, info) {
       let fields = { "country_id": "country_id","country_iso_code": "country_iso_code","country_name": "country_name" }
    return execDbCmd("UPDATE", "movies.country", fields, input);
  },
  deleteCountry(root, where, context, info) {
    return execDbCmd("DELETE", "movies.country", where);
  },
  createDepartment(root, {input}, context, info) {
       let fields = { "department_id": "department_id","department_name": "department_name" }
    return execDbCmd("INSERT", "movies.department", fields, input);
  },
  updateDepartment(root, {department_id, input}, context, info) {
       let fields = { "department_id": "department_id","department_name": "department_name" }
    return execDbCmd("UPDATE", "movies.department", fields, input);
  },
  deleteDepartment(root, where, context, info) {
    return execDbCmd("DELETE", "movies.department", where);
  },
  createGender(root, {input}, context, info) {
       let fields = { "gender_id": "gender_id","gender": "gender" }
    return execDbCmd("INSERT", "movies.gender", fields, input);
  },
  updateGender(root, {gender_id, input}, context, info) {
       let fields = { "gender_id": "gender_id","gender": "gender" }
    return execDbCmd("UPDATE", "movies.gender", fields, input);
  },
  deleteGender(root, where, context, info) {
    return execDbCmd("DELETE", "movies.gender", where);
  },
  createGenre(root, {input}, context, info) {
       let fields = { "genre_id": "genre_id","genre_name": "genre_name" }
    return execDbCmd("INSERT", "movies.genre", fields, input);
  },
  updateGenre(root, {genre_id, input}, context, info) {
       let fields = { "genre_id": "genre_id","genre_name": "genre_name" }
    return execDbCmd("UPDATE", "movies.genre", fields, input);
  },
  deleteGenre(root, where, context, info) {
    return execDbCmd("DELETE", "movies.genre", where);
  },
  createKeyword(root, {input}, context, info) {
       let fields = { "keyword_id": "keyword_id","keyword_name": "keyword_name" }
    return execDbCmd("INSERT", "movies.keyword", fields, input);
  },
  updateKeyword(root, {keyword_id, input}, context, info) {
       let fields = { "keyword_id": "keyword_id","keyword_name": "keyword_name" }
    return execDbCmd("UPDATE", "movies.keyword", fields, input);
  },
  deleteKeyword(root, where, context, info) {
    return execDbCmd("DELETE", "movies.keyword", where);
  },
  createLanguage(root, {input}, context, info) {
       let fields = { "language_id": "language_id","language_code": "language_code","language_name": "language_name" }
    return execDbCmd("INSERT", "movies.language", fields, input);
  },
  updateLanguage(root, {language_id, input}, context, info) {
       let fields = { "language_id": "language_id","language_code": "language_code","language_name": "language_name" }
    return execDbCmd("UPDATE", "movies.language", fields, input);
  },
  deleteLanguage(root, where, context, info) {
    return execDbCmd("DELETE", "movies.language", where);
  },
  createLanguage_role(root, {input}, context, info) {
       let fields = { "role_id": "role_id","language_role": "language_role" }
    return execDbCmd("INSERT", "movies.language_role", fields, input);
  },
  updateLanguage_role(root, {role_id, input}, context, info) {
       let fields = { "role_id": "role_id","language_role": "language_role" }
    return execDbCmd("UPDATE", "movies.language_role", fields, input);
  },
  deleteLanguage_role(root, where, context, info) {
    return execDbCmd("DELETE", "movies.language_role", where);
  },
  createMovie(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","title": "title","budget": "budget","homepage": "homepage","overview": "overview","popularity": "popularity","release_date": "release_date","revenue": "revenue","runtime": "runtime","movie_status": "movie_status","tagline": "tagline","vote_average": "vote_average","vote_count": "vote_count" }
    return execDbCmd("INSERT", "movies.movie", fields, input);
  },
  updateMovie(root, {movie_id, input}, context, info) {
       let fields = { "movie_id": "movie_id","title": "title","budget": "budget","homepage": "homepage","overview": "overview","popularity": "popularity","release_date": "release_date","revenue": "revenue","runtime": "runtime","movie_status": "movie_status","tagline": "tagline","vote_average": "vote_average","vote_count": "vote_count" }
    return execDbCmd("UPDATE", "movies.movie", fields, input);
  },
  deleteMovie(root, where, context, info) {
    return execDbCmd("DELETE", "movies.movie", where);
  },
  createMovie_cast(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","person_id": "person_id","character_name": "character_name","gender_id": "gender_id","cast_order": "cast_order" }
    return execDbCmd("INSERT", "movies.movie_cast", fields, input);
  },
  updateMovie_cast(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","person_id": "person_id","character_name": "character_name","gender_id": "gender_id","cast_order": "cast_order" }
    return execDbCmd("UPDATE", "movies.movie_cast", fields, input);
  },
  deleteMovie_cast(root, where, context, info) {
    return execDbCmd("DELETE", "movies.movie_cast", where);
  },
  createMovie_company(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","company_id": "company_id" }
    return execDbCmd("INSERT", "movies.movie_company", fields, input);
  },
  updateMovie_company(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","company_id": "company_id" }
    return execDbCmd("UPDATE", "movies.movie_company", fields, input);
  },
  deleteMovie_company(root, where, context, info) {
    return execDbCmd("DELETE", "movies.movie_company", where);
  },
  createMovie_crew(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","person_id": "person_id","department_id": "department_id","job": "job" }
    return execDbCmd("INSERT", "movies.movie_crew", fields, input);
  },
  updateMovie_crew(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","person_id": "person_id","department_id": "department_id","job": "job" }
    return execDbCmd("UPDATE", "movies.movie_crew", fields, input);
  },
  deleteMovie_crew(root, where, context, info) {
    return execDbCmd("DELETE", "movies.movie_crew", where);
  },
  createMovie_genres(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","genre_id": "genre_id" }
    return execDbCmd("INSERT", "movies.movie_genres", fields, input);
  },
  updateMovie_genres(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","genre_id": "genre_id" }
    return execDbCmd("UPDATE", "movies.movie_genres", fields, input);
  },
  deleteMovie_genres(root, where, context, info) {
    return execDbCmd("DELETE", "movies.movie_genres", where);
  },
  createMovie_keywords(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","keyword_id": "keyword_id" }
    return execDbCmd("INSERT", "movies.movie_keywords", fields, input);
  },
  updateMovie_keywords(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","keyword_id": "keyword_id" }
    return execDbCmd("UPDATE", "movies.movie_keywords", fields, input);
  },
  deleteMovie_keywords(root, where, context, info) {
    return execDbCmd("DELETE", "movies.movie_keywords", where);
  },
  createMovie_languages(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","language_id": "language_id","language_role_id": "language_role_id" }
    return execDbCmd("INSERT", "movies.movie_languages", fields, input);
  },
  updateMovie_languages(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","language_id": "language_id","language_role_id": "language_role_id" }
    return execDbCmd("UPDATE", "movies.movie_languages", fields, input);
  },
  deleteMovie_languages(root, where, context, info) {
    return execDbCmd("DELETE", "movies.movie_languages", where);
  },
  createPerson(root, {input}, context, info) {
       let fields = { "person_id": "person_id","person_name": "person_name" }
    return execDbCmd("INSERT", "movies.person", fields, input);
  },
  updatePerson(root, {person_id, input}, context, info) {
       let fields = { "person_id": "person_id","person_name": "person_name" }
    return execDbCmd("UPDATE", "movies.person", fields, input);
  },
  deletePerson(root, where, context, info) {
    return execDbCmd("DELETE", "movies.person", where);
  },
  createProduction_company(root, {input}, context, info) {
       let fields = { "company_id": "company_id","company_name": "company_name" }
    return execDbCmd("INSERT", "movies.production_company", fields, input);
  },
  updateProduction_company(root, {company_id, input}, context, info) {
       let fields = { "company_id": "company_id","company_name": "company_name" }
    return execDbCmd("UPDATE", "movies.production_company", fields, input);
  },
  deleteProduction_company(root, where, context, info) {
    return execDbCmd("DELETE", "movies.production_company", where);
  },
  createProduction_country(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","country_id": "country_id" }
    return execDbCmd("INSERT", "movies.production_country", fields, input);
  },
  updateProduction_country(root, {input}, context, info) {
       let fields = { "movie_id": "movie_id","country_id": "country_id" }
    return execDbCmd("UPDATE", "movies.production_country", fields, input);
  },
  deleteProduction_country(root, where, context, info) {
    return execDbCmd("DELETE", "movies.production_country", where);
  }
  },
Country: {
          production_country(parent) {
                let where = { "country_id": parent.country_id }
                let fields = { "movie_id": "movie_id","country_id": "country_id" }
              return getQueryResult('movies.production_country', fields, where)
          }
  },
Department: {
          movie_crew(parent) {
                let where = { "department_id": parent.department_id }
                let fields = { "movie_id": "movie_id","person_id": "person_id","department_id": "department_id","job": "job" }
              return getQueryResult('movies.movie_crew', fields, where)
          }
  },
Gender: {
          movie_cast(parent) {
                let where = { "gender_id": parent.gender_id }
                let fields = { "movie_id": "movie_id","person_id": "person_id","character_name": "character_name","gender_id": "gender_id","cast_order": "cast_order" }
              return getQueryResult('movies.movie_cast', fields, where)
          }
  },
Genre: {
          movie_genres(parent) {
                let where = { "genre_id": parent.genre_id }
                let fields = { "movie_id": "movie_id","genre_id": "genre_id" }
              return getQueryResult('movies.movie_genres', fields, where)
          }
  },
Keyword: {
          movie_keywords(parent) {
                let where = { "keyword_id": parent.keyword_id }
                let fields = { "movie_id": "movie_id","keyword_id": "keyword_id" }
              return getQueryResult('movies.movie_keywords', fields, where)
          }
  },
Language: {
          movie_languages(parent) {
                let where = { "language_id": parent.language_id }
                let fields = { "movie_id": "movie_id","language_id": "language_id","language_role_id": "language_role_id" }
              return getQueryResult('movies.movie_languages', fields, where)
          }
  },
Movie: {
          movie_cast(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = { "movie_id": "movie_id","person_id": "person_id","character_name": "character_name","gender_id": "gender_id","cast_order": "cast_order" }
              return getQueryResult('movies.movie_cast', fields, where)
          },
          movie_company(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = { "movie_id": "movie_id","company_id": "company_id" }
              return getQueryResult('movies.movie_company', fields, where)
          },
          movie_crew(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = { "movie_id": "movie_id","person_id": "person_id","department_id": "department_id","job": "job" }
              return getQueryResult('movies.movie_crew', fields, where)
          },
          movie_genres(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = { "movie_id": "movie_id","genre_id": "genre_id" }
              return getQueryResult('movies.movie_genres', fields, where)
          },
          movie_keywords(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = { "movie_id": "movie_id","keyword_id": "keyword_id" }
              return getQueryResult('movies.movie_keywords', fields, where)
          },
          movie_languages(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = { "movie_id": "movie_id","language_id": "language_id","language_role_id": "language_role_id" }
              return getQueryResult('movies.movie_languages', fields, where)
          },
          production_country(parent) {
                let where = { "movie_id": parent.movie_id }
                let fields = { "movie_id": "movie_id","country_id": "country_id" }
              return getQueryResult('movies.production_country', fields, where)
          }
  },
Person: {
          movie_cast(parent) {
                let where = { "person_id": parent.person_id }
                let fields = { "movie_id": "movie_id","person_id": "person_id","character_name": "character_name","gender_id": "gender_id","cast_order": "cast_order" }
              return getQueryResult('movies.movie_cast', fields, where)
          },
          movie_crew(parent) {
                let where = { "person_id": parent.person_id }
                let fields = { "movie_id": "movie_id","person_id": "person_id","department_id": "department_id","job": "job" }
              return getQueryResult('movies.movie_crew', fields, where)
          }
  },
Production_company: {
          movie_company(parent) {
                let where = { "company_id": parent.company_id }
                let fields = { "movie_id": "movie_id","company_id": "company_id" }
              return getQueryResult('movies.movie_company', fields, where)
          }
  }
  }; 

