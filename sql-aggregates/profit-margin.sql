-- with "profit" as (
--   select "f"."title" as "title",
--          "f"."filmId" as "filmId",
--          "f"."description" as "description",
--          "f"."rating" as "rating",
--          "f"."replacementCost" as "replacementCost"
--    from "films" as "f"
-- )
-- select "title",
--        "description",
--        "rating",
--        sum("p"."amount") - ("replacementCost" * 8) as "totalProfit"
--   from "profit"
--   join "inventory" as "i" using ("filmId")
--   join "rentals" using ("inventoryId")
--   join "payments" as "p" using ("rentalId")
--   group by "filmId"
--   order by "totalProfit" desc
--   limit 5;

select "f"."title",
       "f"."description",
       "f"."rating",
       count("i"."inventoryId") as "rentalTest",
       sum("p"."amount") - ("f"."replacementCost" * 8) as "totalProfit"
      --  "revenue" - "f"."replacementCost" as "totalProfit"
   from "films" as "f"
   join "inventory" as "i" using ("filmId")
   join "rentals" using ("inventoryId")
   join "payments" as "p" using ("rentalId")
   group by "f"."filmId"
  --  order by "rentalTest" desc
   order by "totalProfit" desc
   limit 5;
