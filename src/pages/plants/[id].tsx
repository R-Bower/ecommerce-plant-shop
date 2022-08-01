import {GetStaticPaths, GetStaticProps} from "next"
import {useRouter} from "next/router"
import React from "react"
import {z} from "zod"

import {PlantDto, plantSchema} from "~api/plants"

import NotFound from "../404"

interface Props {
  plant?: PlantDto
}

export default function PlantDetailsPage({plant}: Props): React.ReactElement {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!plant) {
    return <NotFound />
  }

  return <></>
}

function getPlants(fileData: Record<string, unknown>): PlantDto[] {
  const parsedData = z
    .object({plants: z.array(plantSchema)})
    .safeParse(fileData)
  return parsedData.success ? parsedData.data.plants : []
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.debug(process.cwd())
  const path = await import("path")
  const fse = await import("fs-extra")
  const fileData: Record<string, unknown> = fse.readJsonSync(
    path.resolve(process.cwd(), "src/pages/api/plants/data/plants.json"),
  )

  const parsedData = getPlants(fileData)

  if (!parsedData.length) {
    console.debug("Failed to find plants")
    return {
      fallback: false,
      paths: [],
    }
  }

  return {
    fallback: false,
    paths: parsedData.map((plant: PlantDto) => ({params: {id: plant.id}})),
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params?.id) {
    return {
      props: {plant: undefined},
      revalidate: 1,
    }
  }
  const id = typeof params.id === "string" ? params.id : params.id[0]
  const path = await import("path")
  const fse = await import("fs-extra")
  const fileData: Record<string, unknown> = fse.readJsonSync(
    path.resolve(process.cwd(), "src/pages/api/plants/data/plants.json"),
  )

  const parsedData = getPlants(fileData)

  if (!parsedData.length) {
    console.debug("Failed to find plants")
    return {
      props: {
        plant: undefined,
      },
      revalidate: 1,
    }
  }

  const plant = parsedData.find((plant: PlantDto) => plant.id === id)

  return {
    props: {plant},
    revalidate: 1,
  }
}
