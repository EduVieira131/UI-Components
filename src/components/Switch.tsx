import * as Switch from '@radix-ui/react-switch'

export default function ToggleSwitch() {
  return (
    <>
      <div className="flex items-center gap-4">
        <Switch.Root
          className="relative inline-flex h-4 w-12 cursor-pointer items-center rounded-full border-2 border-[#34394E] bg-[#1B1D28] outline-none"
          id="kidsProfile"
        >
          <Switch.Thumb className="block h-7 w-7  rounded-full bg-[#7D8193] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-full" />
        </Switch.Root>

        <label htmlFor="kidsProfile">Kids profile</label>
      </div>
    </>
  )
}
