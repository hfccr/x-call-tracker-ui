"use client";
import { Polybase } from "@polybase/client";
import { defaultNamespace } from "./../constants/polybase";

const db = new Polybase({ defaultNamespace });

const collectionReference = db.collection();

async function getRecord() {
  const { data, block } = await collectionReference.record("id").get();
}
